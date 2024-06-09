module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			arrowFunctions: false,
		},
	},
	plugins: ['prettier'],
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/require-default-props': 'off',
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'react/jsx-indent': ['error', 'tab'],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
			},
		],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
	},
};
