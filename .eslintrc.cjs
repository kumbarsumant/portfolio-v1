module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'airbnb/hooks'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      arrowFunctions: false,
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    indent: ['error', 'tab'],
    'no-tabs': 'off',
    'react/jsx-indent': ['error', 'tab'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
      },
    ],
  },
};
