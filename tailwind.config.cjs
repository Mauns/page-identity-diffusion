/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: require("./src/assets/tailwind/_colors.cjs"),
			aspectRatio: {
				'2/3': '2 / 3',
			},
		},
	},
	plugins: [],
}
