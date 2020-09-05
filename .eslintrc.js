module.exports = {
  parser: 'babel-eslint', // parser指定解析器，默认的为espree。babel-eslint是一个Babel parser的包装器，这个包装器使得 Babel parser 可以和 ESLint 协调工作
  parserOptions: {
    sourceType: 'module', // 设置为 "script" (默认) 或 "module"（ES6)。
    ecmaFeatures: {
      // 这是个对象，表示你想使用的额外的语言特性:
      jsx: true, // 启用 JSX
    },
  },
  extends: ['eslint:recommended'], // 使用eslint推荐的规则作为基础配置，可以在rules中覆盖
  plugins: ['vue', 'prettier', 'import'], // vue是eslint-plugin-vue的简写，此插件的作用是可以让eslint识别.vue中的script代码
  rules: {
    // 0或者off表示规则关闭，出错也被忽略；1或者warn表示如果出错会给出警告(不会导致程序退出)；2或者error表示如果出错会报出错误(会导致程序退出，退出码是1)
    'no-console': 'off',
    'prefer-const': 'error',
    'prettier/prettier': 'warn',
    'prefer-arrow-callback': 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  },
  globals: {
    // 允许在代码中使用全局变量
    location: true,
    setTimeout: true,
  },
}
