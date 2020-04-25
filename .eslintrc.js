'use strict';
module.exports = {
  parser: 'babel-eslint',
  env: {
    amd: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      classes: true
    }
  },
  rules: {
    'react/jsx-indent': [2, 2],
    'react/prop-types': 'off',
    'prefer-const': 2,
    'no-var': 2,
    semi: [2, 'always'],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ]
  }
};
