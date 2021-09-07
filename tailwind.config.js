module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			transitionDuration: {
				3000: "3000ms",
			},
			zIndex: {
				75: 75,
				100: 100,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
