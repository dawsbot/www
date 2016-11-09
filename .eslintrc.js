'use strict';
module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended"
  ],
  "plugins": [
    "react",
    "jsx-a11y"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "classes": true
    }
  },
  "rules": {
    "react/jsx-indent": [2, 2],
    "prefer-const": 2,
    "no-var": 2,
    "semi": [2, "always"],
    quotes: [
      "error",
      "single", {
        "allowTemplateLiterals": true
      }
    ]
  }
}
