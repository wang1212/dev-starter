// See https://eslint.org/docs/user-guide/configuring

module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
	},
	env: {
		node: true,
		browser: true,
		es6: true,
		jest: true,
	},
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
	],
	settings: {},
	rules: {
		'no-console': [
			'error',
			{
				allow: ['warn', 'error'],
			},
		],
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'@typescript-eslint/no-unsafe-assignment': 'warn',
		'@typescript-eslint/no-unsafe-member-access': 'warn',
		'@typescript-eslint/no-unsafe-call': 'warn',
		'@typescript-eslint/no-unsafe-return': 'warn',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
	},
	globals: {},
}
