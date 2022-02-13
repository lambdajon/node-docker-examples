module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: [],
  extends: [
    'plugin:prettier/recommended',
    'eslint:recommended',
    'airbnb-base/legacy'
  ],
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    quotes: ['error', 'single'],
    'no-var': 'error'
  }
};
