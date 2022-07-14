module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier', 'html'],
  rules: {
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-new': 'off',
    'no-return-assign': 'off',
  },
}
