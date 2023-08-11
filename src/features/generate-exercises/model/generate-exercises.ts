import { generateArray } from '@/shared/lib/generate-array';
import { getRandomIntegerInclusive } from '@/shared/lib/get-random-integer-inclusive';
import { shuffle } from '@/shared/lib/shuffle';
import { uniqueId } from '@/shared/lib/unique-id';

const EXERCISE_ID_PREFIX = 'exx';

interface IncOperator {
	type: 'inc';
	symbol: '+';
	func: (a: number, b: number) => number;
}

interface DecOperator {
	type: 'dec';
	symbol: '-';
	func: (a: number, b: number) => number;
}

type Operator = IncOperator | DecOperator

export interface Exercise {
	id: string;
	label: string;
	result: number;
}

function generateOperators(): [Operator, Operator] {
  const operators: [IncOperator, DecOperator] = [
    {
      type: 'inc',
      symbol: '+',
      func: (a: number, b: number) => a + b,
    },
    {
      type: 'dec',
      symbol: '-',
      func: (a: number, b: number) => a - b,
    },
  ];

  return shuffle(operators) as [Operator, Operator];
}

type Operand = number;
type FirstOperand = Operand;
type SecondOperand = Operand;
type ThirdOperand = Operand;

type Operands = [FirstOperand, SecondOperand, ThirdOperand];

function generateOperand(): Operand {
  return getRandomIntegerInclusive(1, 9);
}

function generateThirdOperand(firstOperand: FirstOperand): ThirdOperand {
  const thirdOperand = generateOperand();
  if (firstOperand === thirdOperand) {
    return generateThirdOperand(firstOperand);
  }
  return thirdOperand;
}

function generateOperands(): Operands {
  const firstOperand = generateOperand();
  const secondOperand = generateOperand();
  return [
    firstOperand,
    secondOperand,
    generateThirdOperand(firstOperand),
  ];
}

function generateExample(): Exercise {
  function generateOperandsAndGetResult(generatedOperators: [Operator, Operator]) {
    const operands = generateOperands();
    const [x, y, z] = operands;
    const resultOfXY = generatedOperators[0].func(x, y);
    const resultOfYZ = generatedOperators[1].func(y, z);
    const result = generatedOperators[1].func(resultOfXY, z);

    const isCorrectOperands = resultOfXY > 0 && resultOfYZ > 0 && result > 0 && result !== x;

    if (isCorrectOperands) {
      return {
        result,
        operands,
      };
    }
    return generateOperandsAndGetResult(generatedOperators);
  }

  const operators = generateOperators();
  const {
    result,
    operands,
  } = generateOperandsAndGetResult(operators);
  const [x, y, z] = operands;

  function makeLabel() {
    return `${x} ${operators[0].symbol} ${y} ${operators[1].symbol} ${z} =`;
  }

  return {
    id: uniqueId(EXERCISE_ID_PREFIX),
    label: makeLabel(),
    result,
  };
}

export function generateExercises(count: number): Exercise[] {
  return generateArray(count, generateExample);
}
