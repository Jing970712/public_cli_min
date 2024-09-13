const path = require("path");
const requireAll = require("require-all");
// 暴露出所有规则给用户
exports.rules = requireAll({
  dirname: path.resolve(__dirname, "rules"),
});
// 暴露出默认配置给用户
exports.configs = requireAll({
  dirname: path.resolve(__dirname, "configs"),
});

exports.processors = {
  ".json": {
    preprocess(text) {
      // As JS file
      return [`module.exports = ${text}`];
    },
  },
};
