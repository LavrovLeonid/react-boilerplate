module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      typescript: {},
    },
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'unicorn', '@emotion'],
  rules: {
    '@emotion/syntax-preference': [2, 'object'],
    'react/jsx-handler-names': [
      'error',
      {
        checkLocalVariables: true,
        checkInlineFunction: false,
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.ts', '**/*.test.tsx'] },
    ],
    'no-console': 'error',
    'func-names': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    '@typescript-eslint/no-shadow': ['off'],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'never',
      },
    ],
    'import/no-duplicates': 'error',
    'react/no-danger': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'function'],
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        trailingUnderscore: 'allow',
        filter: {
          regex: '(^_id|^__v|^__html)$',
          match: false,
        },
      },
      {
        selector: ['enum', 'enumMember', 'interface', 'typeAlias'],
        format: ['PascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'event',
          'draft',
          'request',
          'response',
          'staticContext',
        ],
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-useless-fragment': 'off',
    'unicorn/prevent-abbreviations': [
      'error',
      {
        extendDefaultReplacements: true,
        replacements: {
          props: {
            properties: false,
          },
          params: {
            parameters: false,
          },
          ref: {
            reference: false,
          },
        },
      },
    ],
  },
};
