module.exports = {
  extends: [
    "standard"
  ],
  env: {
    browser: true,
    es6: true,
    jest: true
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
  }
}