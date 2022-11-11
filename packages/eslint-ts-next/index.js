/** @type {import('eslint').Linter.BaseConfig} **/
module.exports = {
    ...require('@muravjev/configs-eslint-ts'),
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'log-filenames', 'prettier'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                // 'plugin:@typescript-eslint/recommended-requiring-type-checking', // fails to initialize with vs code
                // 'plugin:jest/recommended',
                // 'plugin:react/recommended', //< covered in next
                // 'plugin:react-hooks/recommended', //< covered in next
                // 'plugin:@next/next/recommended', //< covered in next
                'next', // https://github.com/vercel/next.js/blob/canary/packages/eslint-config-next/package.json
                'next/core-web-vitals',
                'prettier'
            ],
            rules: {
                '@typescript-eslint/no-empty-interface': 'off',
                '@typescript-eslint/no-explicit-any': 'off',
                '@typescript-eslint/no-namespace': 'off',
                '@typescript-eslint/no-var-requires': 'off',
                '@typescript-eslint/no-unused-vars': 'warn',
                'react/react-in-jsx-scope': 'off',
                'react-internal/no-production-logging': 'off',
                'react/display-name': 'off',
                '@next/next/no-img-element': 'off'
            },
            env: {
                browser: true,
                node: true,
                jest: true
            },
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: ['apps/*/', 'packages/*/*/']
            },
            settings: {
                next: {
                    rootDir: ['apps/*/', 'packages/*/*/']
                },
                react: {
                    version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
                }
            }
        }
    ]
};
