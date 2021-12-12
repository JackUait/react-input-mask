module.exports = {
	root: true,
	parser: '@babel/eslint-parser',
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ['react', 'jsx-a11y', 'optimize-regex', 'sonarjs', 'react-hooks'],
	extends: [
		'eslint:recommended',
		'plugin:sonarjs/recommended',
		'plugin:react/recommended',
		'plugin:jsx-a11y/strict'
	],
	rules: {
		'array-callback-return': 1,
		'no-self-compare': 1,
		'no-template-curly-in-string': 1,
		'no-unmodified-loop-condition': 2,
		'no-unreachable-loop': 2,
		curly: 1,
		'default-case-last': 2,
		'default-param-last': 2,
		eqeqeq: 2,
		'new-cap': 2,
		'no-array-constructor': 2,
		'no-else-return': 1,
		'no-eval': 2,
		'no-implied-eval': 2,
		'no-extend-native': 2,
		'no-extra-label': 2,
		'no-floating-decimal': 1,
		'no-implicit-coercion': ['error', { allow: ['!!', '+'] }],
		'no-lone-blocks': 2,
		'no-lonely-if': 1,
		'no-mixed-operators': 1,
		'no-multi-assign': 2,
		'no-nested-ternary': 2,
		'no-new-wrappers': 1,
		'no-param-reassign': 2,
		'no-proto': 2,
		'no-sequences': 2,
		'no-throw-literal': 2,
		'no-undef-init': 2,
		'no-unneeded-ternary': 1,
		'no-useless-computed-key': 1,
		'no-useless-concat': 1,
		'no-useless-constructor': 1,
		'prefer-arrow-callback': 2,
		'prefer-spread': 1,
		yoda: 1,
		'react-hooks/rules-of-hooks': 2,
		'react/no-find-dom-node': 2,
		'react/display-name': 1,
		'react/boolean-prop-naming': [
			'error',
			{ rule: '^(is|has|always)[A-Z]([A-Za-z0-9]?)+' }
		],
		'react/no-array-index-key': 2,
		'react/no-arrow-function-lifecycle': 2,
		'react/no-did-mount-set-state': 2,
		'react/no-invalid-html-attribute': 2,
		'react/no-namespace': 2,
		'react/no-typos': 2,
		'react/no-unstable-nested-components': 2,
		'react/jsx-boolean-value': 2,
		'optimize-regex/optimize-regex': [
			'error',
			{
				blacklist: ['charClassClassrangesMerge']
			}
		]
	}
}
