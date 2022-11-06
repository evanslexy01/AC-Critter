const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'))

module.exports = {
  root: true,
  ignorePatterns: ['dist/*', 'coverage/*'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: { warnOnUnsupportedTypeScriptVersion: true },
  plugins: ['@typescript-eslint', 'sort-imports-es6-autofix', 'prettier', 'jest', 'testing-library'],
  env: { browser: true, commonjs: true, es6: true, jest: true, node: true },
  rules: {
    'array-callback-return': 'warn',
    'dot-location': ['warn', 'property'],
    eqeqeq: ['warn', 'smart'],
    'new-parens': 'warn',
    'no-caller': 'warn',
    'no-cond-assign': ['warn', 'except-parens'],
    'no-const-assign': 'warn',
    'no-control-regex': 'warn',
    'no-delete-var': 'warn',
    'no-dupe-args': 'warn',
    'no-dupe-keys': 'warn',
    'no-duplicate-case': 'warn',
    'no-empty-character-class': 'warn',
    'no-empty-pattern': 'warn',
    'no-eval': 'warn',
    'no-ex-assign': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-fallthrough': 'warn',
    'no-func-assign': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-regexp': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: false
      }
    ],
    'no-multi-str': 'warn',
    'no-global-assign': 'warn',
    'no-unsafe-negation': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-symbol': 'warn',
    'no-new-wrappers': 'warn',
    'no-obj-calls': 'warn',
    'no-octal': 'warn',
    'no-octal-escape': 'warn',
    'no-regex-spaces': 'warn',
    'no-restricted-syntax': ['warn', 'WithStatement'],
    'no-script-url': 'warn',
    'no-self-assign': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-restricted-globals': ['error'],
    'no-unreachable': 'warn',
    'no-unused-labels': 'warn',
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-escape': 'warn',
    'no-useless-rename': ['warn', { ignoreDestructuring: false, ignoreExport: false }],
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    'require-yield': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    strict: ['warn', 'never'],
    'unicode-bom': ['warn', 'never'],
    'use-isnan': 'warn',
    'valid-typeof': 'warn',
    'no-restricted-properties': [
      'error',
      { object: 'require', property: 'ensure', message: 'Use import() instead' },
      { object: 'System', property: 'import', message: 'Use import() instead' }
    ],
    'getter-return': 'warn',

    // Use TS-ES instead of ESLint for these Rules
    'no-dupe-class-members': 'off',
    'no-undef': 'off',
    '@typescript-eslint/consistent-type-assertions': 'warn',
    '@typescript-eslint/no-array-constructor': 'warn',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'warn',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      { functions: false, classes: false, variables: false, typedefs: false }
    ],
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { args: 'none', argsIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true }
    ],
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    'sort-imports-es6-autofix/sort-imports-es6': [
      'warn',
      { memberSyntaxSortOrder: ['none', 'single', 'multiple', 'all'] }
    ],
    '@typescript-eslint/no-explicit-any': 'off', // Please don't do this though
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prettier/prettier': ['warn', prettierOptions]
  },
  overrides: [
    {
      files: ['**/*.{spec,test}.*'],
      env: { 'jest/globals': true },
      rules: {
        'jest/no-conditional-expect': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-interpolation-in-snapshots': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-mocks-import': 'error',
        'jest/valid-describe-callback': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-title': 'warn',
        'testing-library/await-async-query': 'error',
        'testing-library/await-async-utils': 'error',
        'testing-library/no-await-sync-query': 'error',
        'testing-library/no-container': 'error',
        'testing-library/no-debugging-utils': 'error',
        'testing-library/no-dom-import': ['error', 'react'],
        'testing-library/no-node-access': 'error',
        'testing-library/no-promise-in-fire-event': 'error',
        'testing-library/no-render-in-setup': 'error',
        'testing-library/no-unnecessary-act': 'error',
        'testing-library/no-wait-for-empty-callback': 'error',
        'testing-library/no-wait-for-multiple-assertions': 'error',
        'testing-library/no-wait-for-side-effects': 'error',
        'testing-library/no-wait-for-snapshot': 'error',
        'testing-library/prefer-find-by': 'error',
        'testing-library/prefer-presence-queries': 'error',
        'testing-library/prefer-query-by-disappearance': 'error',
        'testing-library/prefer-screen-queries': 'error',
        'testing-library/render-result-naming-convention': 'error'
      }
    }
  ]
}
