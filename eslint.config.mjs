import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
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
      'no-undef': 'error',
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['error'] }],
    },
  },
  {
    ignores: ['dist/**', 'apps/verdiApp/**'],
  },
  {
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: pluginPrettier,
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  prettierConfig,
];
