import js from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    ignores: [
      "**/*.js",
      "**/*.mjs",
      'node_modules',
      'dist',
      '**/*.test.ts'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      // tyese rules moved to third-party plugin 'stylistic'
      // '@typescript-eslint/member-delimiter-style': [
      //   'error',
      //   {
      //     'multiline': {
      //       'delimiter': 'none',
      //       'requireLast': true
      //     },
      //     'singleline': {
      //       'delimiter': 'semi',
      //       'requireLast': false
      //     }
      //   }
      // ],
      '@typescript-eslint/explicit-function-return-type': 'off',      
      '@typescript-eslint/no-unused-vars': ['warn', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
      '@typescript-eslint/restrict-plus-operands': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',

      // extra rules disabled for newest typescript eslint
      "@typescript-eslint/triple-slash-reference": 0,
      "@typescript-eslint/no-unused-expressions": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-unused-vars": 0
    }
  },
  {
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        console: true,
        document: true,
        window: true,
        Atomics: true,
        SharedArrayBuffer: true
      }
    },
    rules: {
      'indent': [
        'error',
        2,
        { 'SwitchCase': 1 }
      ],
      'linebreak-style': [
        'error',
        'unix'
      ],
      'quotes': [
        'error',
        'single',
        { 'allowTemplateLiterals': true }
      ],
      'semi': [
        'error',
        'never'
      ],
      'no-var': ['error'],
      'no-unused-vars': 'off',
      'no-prototype-builtins': 'off'
    }
  }
]
