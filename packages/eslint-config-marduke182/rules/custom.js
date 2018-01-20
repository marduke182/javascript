module.exports = {
  rules: {
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: { multiline: false },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
        paths: ['src'],
      },
    },
  },
};
