module.exports = {
  extends: [
    './rules/custom',
  ].map(require.resolve),
  rules: {}
};