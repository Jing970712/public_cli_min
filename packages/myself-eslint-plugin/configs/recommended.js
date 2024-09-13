module.exports = {
  // 插件命名
  plugins: ["myself-eslint-plugin"],
  // 默认使用规则
  rules: {
    "myself-eslint-plugin/no-http-url": "warn",
    "myself-eslint-plugin/no-secret-info": "error",
  },
};
