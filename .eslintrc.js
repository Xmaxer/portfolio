module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "react/prop-types": 0,
    "@typescript-eslint/ban-types": 0,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
