/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    'plugin:@conarti/feature-sliced/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    '@conarti/feature-sliced/public-api': ['error', {
      level: 'segments',
    }]
  }
}
