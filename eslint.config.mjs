import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: pluginPrettier,
    },
  },
  pluginJs.configs.recommended,
  prettierConfig,
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      'no-duplicate-imports': 'warn',
      'no-undef': 'warn',
      'no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['error'] }],
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
  {
    ignores: ['dist/**'],
  }
];
