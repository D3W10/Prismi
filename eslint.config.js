import js from "@eslint/js";
import globals from "globals";
import tslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import svelteParser from "svelte-eslint-parser";

export default [
    js.configs.recommended,
    ...tslint.configs.recommended,
    {
        files: [
            "**/*.js",
            "**/*.ts",
            "**/*.json"
        ],
        ignores: [
            ".DS_Store",
            "node_modules",
            "/build",
            "/.svelte-kit",
            "/package",
            ".env",
            ".env.*",
            "!.env.example",
            "package-lock.json"
        ],
        plugins: {
            "@stylistic": stylistic
        },
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2017,
                ...globals.node
            }
        },
        rules: {
            "camelcase": 1,
            "capitalized-comments": 1,
            "@stylistic/indent": [2, 4],
            "@stylistic/eol-last": [2, "never"],
            "@stylistic/quotes": [2, "double"],
            "@stylistic/semi": [2, "always"],
            "@stylistic/comma-dangle": [2, "never"],
            "@stylistic/quote-props": [1, "consistent"],
            "@typescript-eslint/no-explicit-any": [0]
        }
    },
    {
        files: [
            "**/*.svelte",
            "*.svelte"
        ],
        languageOptions: {
            parser: svelteParser
        }
    }
];