module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	// extends: ['plugin:react/recommended', 'airbnb'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended-required-type-checking',
		'airbnb-typescript',
		'airbnb-hooks',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	// rules: {},
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
	},
};
