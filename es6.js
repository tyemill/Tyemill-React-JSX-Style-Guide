module.exports = {
  extends: [
    "standard"
  ],
  plugins: ['jest'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    "jest/globals": true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  rules: {
    indent: ["error", 2]
  },
  overrides: [
    {
      files: ["*.test*.js"],
      rules: {
        // jest tests can mock promise responses that are not errors such as axios responses
        'prefer-promise-reject-errors': "off"
      }
    }
  ]
}