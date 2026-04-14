const config = require('@rubensworks/eslint-config');

module.exports = {
  ...config,
  parserOptions: {
    ...config.parserOptions,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.eslint.json'],
  },
  overrides: [
    ...config.overrides,
    {
      files: ['**/test/**/*.ts'],
      rules: {
        'import/no-commonjs': 'off',
        'import/no-unassigned-import': 'off',
      },
    },
  ],
};
