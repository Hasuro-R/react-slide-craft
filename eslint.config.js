import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import { defineConfig } from "eslint/config"
import pluginPrettier from "eslint-config-prettier"
import tsParser from "@typescript-eslint/parser"
import globals from "globals"

export default defineConfig([
  tseslint.config(
    {
      ignores: ["**/node_modules/**", "**/dist", "**/.storybook", "**/*.{workspace.ts,config.ts}"],
    },
    {
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        globals: {
          ...globals.browser,
        },
        parser: tsParser,
        parserOptions: {
          project: "./tsconfig.json",
        },
        ecmaVersion: "latest",
        sourceType: "module",
      },
      extends: [
        eslint.configs.recommended,
        pluginPrettier,
      ],
      rules: {
        "no-constant-binary-expression": "off",
        "object-curly-newline": ["error", {
          ObjectPattern: { multiline: true, minProperties: 2 },
        }],
      },
    },
  ),
]);
