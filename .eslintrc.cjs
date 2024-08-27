module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['airbnb-base',
    'airbnb-typescript/base',
  ],
  parserOptions: { 
    project: './tsconfig.json',
  },
  overrides: [
    {
      files: ['**/*/*.test.ts'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: { 'jest/prefer-expect-assertions': 'off' },
    },
  ],
  rules: {
    'linebreak-style': 0,
    'no-console': 'off',
    'no-restricted-syntax': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': ["error", { "allow": ["_items",] }],
    'no-return-assign': 'off',
    'max-len': ["error", { "code": 200 }],
  },
};
