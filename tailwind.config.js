/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"brand-fb": "#0165E1",
				"brand-ig": "#FCAF45",
				"brand-linkedin": "#0A66C2",
				"primary-background": "#010409",
				"secondary-background": "#fff",
				"tertiary-background": "#669bcf",
				"modal-background": "#612f38",
				"transparent-primary": "#0d0f12",
				"transparent-secondary": "#242729fc",
				"primary-text": "#d99006",
				"secondary-text": "#fff",
				"tertiary-text": "#669bcf",
				"color-grey": "#AEAEAE",
				one: "#d99006",
				two: "#669bcf",
				three: "#283953",
				brown: "#6f2814",
				five: "#010409",
				six: "#121f27",
				seven: "#612f38",
				eight: "#fdea71",
			},
			keyframes: {
				sb: {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-10%)" },
				},
				wave: {
					"0%": { transform: "rotate(0.0deg)" },
					"10%": { transform: "rotate(14deg)" },
					"20%": { transform: "rotate(-8deg)" },
					"30%": { transform: "rotate(14deg)" },
					"40%": { transform: "rotate(-4deg)" },
					"50%": { transform: "rotate(10.0deg)" },
					"60%": { transform: "rotate(0.0deg)" },
					"100%": { transform: "rotate(0.0deg)" },
				},
				scroll: {
					"0%": { transform: "translateY(0px)", opacity: 1 },
					"100%": { transform: "translateY(26px)", opacity: 0 },
				},
			},
			animation: {
				sb: "sb 1s infinite alternate",
				wave: "wave 2s linear infinite",
				scroll: "1.5s scroll infinite",
			},
		},
	},
	plugins: [],
};
