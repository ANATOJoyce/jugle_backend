// @ts-check
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  ignores: ['eslint.config.mjs'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: tsParser,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'commonjs',
    project: path.join(__dirname, 'tsconfig.json'),
  },
  env: {
    node: true,
    jest: true,
  },
  globals: {
    ...globals.node,
    ...globals.jest,
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-floating-promises': 'warn',
    '@typescript-eslint/no-unsafe-argument': 'warn',
  },
};
