/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        printWidth: 80,
        trailingComma: 'none',
        endOfLine: 'auto'
      }
    ],
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: ['index']
      }
    ],
    'vue/no-setup-props-destructure': ['off']
  }
}

// - 格式：单引号，没有分号，行宽度100字符，没有对象数组最后一个逗号，换行字符串自动（系统不一样换行符号不一样）
// - vue 组件需要大驼峰命名，除去 index 之外，App 是默认支持的
// - 允许对 props 进行解构，我们会开启解构保持响应式的语法糖
