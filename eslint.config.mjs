// @ts-check
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";

// import eslintPluginLitA11y from "eslint-plugin-lit-a11y"; // TODO: re-enable this plugin once it supports ESLint 9's flat config format

export default tseslint.config(
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { ignores: ["dist/"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
);
