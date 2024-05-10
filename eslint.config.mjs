import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import pluginImport from 'eslint-plugin-import';

const settings = [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReactConfig,
    eslintPluginPrettierRecommended,
    {
        plugins: {
            import: pluginImport,
        },
    },
    {
        rules: {
            'react/display-name': 0,
            'import/newline-after-import': ['error', { count: 1 }],
            'import/no-anonymous-default-export': 'error',
            'react/no-unknown-property': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
        },
    },
];

export default settings;
