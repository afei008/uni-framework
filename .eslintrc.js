/** @format */

module.exports = {
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
        'eslint:recommended',
        'plugin:vue/recommended',
        'airbnb-base',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './']],
            },
        },
    },
    rules: {
        indent: 'off',
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'import/extensions': 0,
        'no-param-reassign': 0,
        'no-console': 0,
        'import/no-unresolved': 0,
    },
};
