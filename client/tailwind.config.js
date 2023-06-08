/** @type {import('tailwindcss').Config} */

import withMT from '@material-tailwind/react/utils/withMT'

const tailwindConfig = withMT({
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: []
})

export default tailwindConfig
