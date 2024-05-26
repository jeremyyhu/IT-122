import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    languageOptions: {
      globals: globals.node 
    },
    rules: {
      "prefer-arrow-callback": "warn",
      "no-var": "warn",
    }
  },
  pluginJs.configs.recommended,
];