import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
// import { UserConfig } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react(), vike()],
	test: {
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		globals: true,
		coverage: {
			exclude: [
				"**/__tests__/**",
				"**/pages/**",
				"**/renderer/**",
				"**/server/**",
				"**/.eslintrc.cjs",
			],
			provider: "istanbul",
		},
	},
});
