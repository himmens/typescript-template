const OFF = 0;
const WARN = 1;

module.exports = {
    root: true,
    parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
    extends:  [
        'plugin:react/recommended',  // Uses the recommended rules from @eslint-plugin-react
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
    ],
    parserOptions:  {
        ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
        sourceType:  'module',  // Allows for the use of imports
        ecmaFeatures:  {
            jsx:  true,  // Allows for the parsing of JSX
        },
    },
    rules:  {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        'jsx-quotes': [ WARN, 'prefer-single' ],
        '@typescript-eslint/explicit-function-return-type': [
            WARN,
            {
                allowExpressions: true
            }
        ],
        "@typescript-eslint/no-var-requires": "off"
    },
    settings: {
        react: {
            version: 'detect',
        }
    },
};
