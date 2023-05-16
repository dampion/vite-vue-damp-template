module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: '2019', // 'latest',
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
  }
}
