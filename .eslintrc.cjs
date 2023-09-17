/* eslint-env node */
/* eslint-disable filenames-simple/naming-convention */
/* eslint-disable @typescript-eslint/no-require-imports */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'alloy',
    'alloy/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:@conarti/feature-sliced/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      js: '@babel/eslint-parser',
      jsx: '@babel/eslint-parser',
      ts: '@typescript-eslint/parser',
      tsx: '@typescript-eslint/parser',
    },
  },
  plugins: [
    'filenames-simple',
    'modules-newlines',
  ],
  rules: {
    /* feature sliced strict recommended rules */
    '@conarti/feature-sliced/public-api': ['error', { level: 'segments' }],

    /* my own style rules */
    'filenames-simple/naming-convention': ['error', { rule: 'kebab-case' }],
    'modules-newlines/import-declaration-newline': 'error',
    'modules-newlines/export-declaration-newline': 'error',
    'object-curly-newline': ['error', {
      ObjectExpression: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 2,
      },
      ImportDeclaration: {
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 2,
        consistent: true,
      },
    }],
    '@typescript-eslint/consistent-type-imports': ['error', { fixStyle: 'inline-type-imports' }],
    'comma-dangle': ['error', 'always-multiline'],
    indent: ['error', 2],
    'brace-style': 'error',
    semi: ['error', 'always'],
    quotes: ['error', 'single', { avoidEscape: true }],
    'linebreak-style': ['error', 'unix'],
    complexity: ['error', 10],
    'max-len': ['error', 120, 2, {
      ignoreUrls: true,
      ignoreComments: true,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],
  },
};
