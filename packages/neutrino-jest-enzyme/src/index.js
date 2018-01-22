module.exports = (neutrino, opts = {}) => {
  neutrino.use(
    '@neutrinojs/jest',
    Object.assign(
      {
        testMatch: ['**/__tests__/**/*.test.js?(x)', '**/?(*.)(spec|test).js?(x)'],
        testRegex: '',
        setupTestFrameworkScriptFile: require.resolve('./framework'),
        setupFiles: [require.resolve('./jest/setup')],
      },
      opts,
    ),
  );
};
