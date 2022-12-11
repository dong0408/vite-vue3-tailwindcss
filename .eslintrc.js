module.exports = {
    parser: 'vue-eslint-parser',

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],

    rules: {
        indent: ['error', 4, { SwitchCase: 1 }],
        'no-unused-vars': 'warn',
        'vue/no-unused-components': 'warn',
        'no-debugger': 'off',
    }
};

