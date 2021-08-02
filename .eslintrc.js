const path = require('path');

module.exports = {
  extends: [
    'react-app',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/strict',
    'prettier',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['react-hooks', 'prettier'],
  globals: {
    gapi: true,
  },
  root: true,
  rules: {
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'import/no-named-as-default': 0,
    'import/no-unused-modules': [
      0,
      {
        unusedExports: true,
        ignoreExports: ['./src/ui'],
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        alphabetize: {
          order: 'asc', // sort in ascending order. Options: ['ignore', 'asc', 'desc']
          caseInsensitive: true, // ignore case. Options: [true, false]
        },
      },
    ],
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'no-sequences': 0,
    'no-unexpected-multiline': 2,
    'no-use-before-define': 0,
    'no-sequences': 0,
    'prettier/prettier': 'error',
    radix: 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 0,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {},
};
