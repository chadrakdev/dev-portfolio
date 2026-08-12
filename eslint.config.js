import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import eslintConfigPrettier from "eslint-config-prettier"

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: ["dist"],
	},
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
	},
	{
		languageOptions: { globals: globals.browser },
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		settings: {
			react: { version: "detect" },
		},
	},
	{
		plugins: {
			"react-hooks": pluginReactHooks,
		},
		rules: {
			...pluginReactHooks.configs.recommended.rules,
		},
	},
	{
		rules: {
			"react/react-in-jsx-scope": "off",
			"react/jsx-uses-react": "off",
			"react/prop-types": "off",
		},
	},
	// Must stay last: disables stylistic ESLint rules that conflict with Prettier,
	// which now owns all formatting concerns (see .prettierrc).
	eslintConfigPrettier,
]
