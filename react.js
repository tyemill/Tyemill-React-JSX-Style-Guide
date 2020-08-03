module.exports = {
  extends: [
    './es6',
    'plugin:react/recommended'
  ],
  plugins: [
    'react',
    'jsx-a11y'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "react/no-array-index-key": [1],
    "react/no-is-mounted": [1],
    "react/no-multi-comp": [1, { "ignoreStateless": true }],
    "react/no-string-refs": [1],
    "react/jsx-curly-spacing": [1],
    "react/jsx-boolean-value": [1],
    "react/jsx-wrap-multilines": [1],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-pascal-case": [1],
    "react/jsx-closing-tag-location": [1],
    "react/jsx-props-no-multi-spaces": [1],
    "react/jsx-tag-spacing": [2, {
      "closingSlash": "never",
      "beforeSelfClosing": "always",
      "afterOpening": "never",
      "beforeClosing": "never"
    }],
    "react/prefer-es6-class": [1],
    "react/prefer-stateless-function": [1],
    "react/prop-types": [0],
    "react/self-closing-comp": [1],
    "react/display-name": [0],
    "react/forbid-prop-types": [1],
    "react/require-render-return": [1],
    "jsx-a11y/alt-text": [1],
    "jsx-a11y/img-redundant-alt": [1],
    "jsx-a11y/aria-role": [1],
    "jsx-a11y/no-access-key": [1],
    "jsx-quotes": [2, "prefer-double"],
  }
}