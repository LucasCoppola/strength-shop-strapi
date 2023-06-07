/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	// eslint-disable-next-line no-undef
	plugins: [require('daisyui')],
	daisyui: {
		darkTheme: 'light' // name of one of the included themes for dark mode
	}
}
