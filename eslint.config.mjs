// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default tseslint.config([
  eslint.configs.recommended,
  {
    files: ["./src/**/*.ts", "./src/**/*.spec.ts"],
    extends: [tseslint.configs.strict, tseslint.configs.stylistic],
  },
  {
    files: ["**/*.js", "**/*.mjs", "**/*.cjs"],
    extends: [tseslint.configs.disableTypeChecked],
  },
  eslintConfigPrettier,
]);
