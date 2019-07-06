module.exports =  {
  parser:  '@typescript-eslint/parser',
  plugins: [
    "@typescript-eslint",
    "security",
    "promise",
    "jest",
    "sonarjs",
  ],
  extends:  [
    "plugin:@typescript-eslint/recommended",
    'plugin:react/recommended',
    "plugin:you-dont-need-lodash-underscore/compatible",
    "plugin:security/recommended",
    "plugin:promise/recommended",
    "plugin:jest/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended"
  ],
  parserOptions:  {
    ecmaVersion:  2018,  // Allows for the parsing of modern ECMAScript features
    sourceType:  'module',  // Allows for the use of imports
    ecmaFeatures:  {
      jsx:  true,  // Allows for the parsing of JSX
    },
  },
  rules:  {
    "unicorn/filename-case": [
      "error",
      {
        "cases": {
          "camelCase": true,
          "pascalCase": true,
        }
      }
    ],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/interface-name-prefix": 'off',
    "unicorn/prevent-abbreviations": 'off',
    'security/detect-object-injection': 'off',
  },
  settings:  {
    react:  {
      version:  'detect',
    },
  },
};
