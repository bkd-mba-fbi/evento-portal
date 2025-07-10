// @ts-check
import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginLitA11y from "eslint-plugin-lit-a11y";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { ignores: ["dist/"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginLitA11y.configs.recommended,
  eslintConfigPrettier,
);
