/** @type {import("eslint").FlatConfig[]} */
const unusedImports = require("eslint-plugin-unused-imports");
const simpleImportSort = require("eslint-plugin-simple-import-sort");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const nextPlugin = require("eslint-plugin-next");

module.exports = [
  {
    ignores: ["node_modules", ".next", "out"],

    languageOptions: {
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
      "@typescript-eslint": tsPlugin,
      next: nextPlugin,
    },

    rules: {
      // Unused imports/variables
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],

      // Import sorting
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      // Next.js recommended rules
      "next/core-web-vitals": "error",
    },
  },
];
