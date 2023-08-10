/** @format */

module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        es6: true,
        node: true,
    },
    globals: {
        uni: 'readonly',
        wx: 'readonly',
        plus: 'readonly',
        getApp: 'readonly',
    },
    extends: [
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
        'airbnb-base',
        'eslint:recommended',
        '@vue/eslint-config-typescript/recommended',
        '@vue/eslint-config-prettier',
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './']],
            },
        },
    },
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': 'error',
        indent: 'off',
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'import/extensions': 0,
        'no-param-reassign': 0,
        'no-console': 0,
        'import/no-unresolved': 0,
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/ban-ts-comment': [
            'warn',
            {
                'ts-expect-error': 'allow-with-description',
                'ts-ignore': 'allow-with-description',
                'ts-nocheck': 'allow-with-description',
                'ts-check': 'allow-with-description',
            },
        ],
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
    },
};
