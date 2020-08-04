module.exports = {
  extends: [
    "./react",
    "plugin:react-native/all"
  ],
  plugins: [
    'react-native'
  ],
  overrides: [{
    files: ['app/**/.js', 'text/**/*.test*']
  }],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
    'react-native/react-native': true
  },
  rules: {
    "react-native/no-raw-text": [1, {
      // React native paper wraps its component value in Text
      skip: [
        'Caption',
        'Headline',
        'Subheading',
        'Title',
        'Paragraph'
      ]
    }],
    "react-native/no-single-element-style-arrays": 0
  }
}