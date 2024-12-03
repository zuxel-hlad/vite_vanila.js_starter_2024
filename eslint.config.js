import globals from 'globals'
import js from '@eslint/js'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
    {
        files: ['**/*.js', '**/*.jsx'],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    js.configs.recommended,
    prettierRecommended,
    {
        rules: {
            'no-console': 'error',
            'prettier/prettier': [
                'warn',
                {
                    arrowParens: 'avoid',
                    singleQuote: true,
                    semi: false,
                    useTabs: false,
                    tabWidth: 4,
                    printWidth: 180,
                    endOfLine: 'lf',
                },
            ],
        },
    },
]
