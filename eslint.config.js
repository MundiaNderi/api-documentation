import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import pluginCypress from "eslint-plugin-cypress"; // Import Cypress plugin

export default [
  { 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node, // Include Node.js globals if needed
        ...pluginCypress.configs.recommended.env.globals, // Add Cypress globals
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  { 
    files: ["**/*.jsx", "**/*.js"], 
    languageOptions: { 
      parserOptions: { 
        ecmaFeatures: { 
          jsx: true 
        } 
      } 
    } 
  },
  ...fixupConfigRules(pluginReactConfig),
  pluginCypress.configs.recommended, // Add Cypress plugin configuration
];
