module.exports = {
  extends: ['semistandard'],
  env: {
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  extends: ['airbnb-typescript', 'prettier', 'plugin:react-hooks/recommended'],
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort'],
  rules: {
    'prettier/prettier': ['error'],
  },
  overrides: [
    {
      files: ['*.config.js', './utils/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
    {
      files: '*.{[j|t]s,tsx}',
      rules: {
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        '@typescript-eslint/no-empty-function': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': 'off',
        'class-methods-use-this': 'off',
        'react/require-default-props': 'off',
        'import/extensions': 'off',
        // 'sort-imports': [
        //   'error',
        //   {
        //     memberSyntaxSortOrder: ['multiple', 'single', 'all', 'none'],
        //     allowSeparatedGroups: true,
        //     ignoreMemberSort: true
        //   }
        // ]
      },
    },
    {
      files: ['*.test.tsx', '*.stories.tsx'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
      },
    },
    {
      files: 'slice.ts',
      rules: {
        'no-param-reassign': 'off',
      },
    },
    {
      files: '*.d.ts',
      rules: {
        'prettier/prettier': 'off',
      },
    },
  ],
};
