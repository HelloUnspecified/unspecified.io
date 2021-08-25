
module.exports = {
	mode: 'jit',
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	darkMode: false,
	theme: {
		fontFamily: {
			head: ['Coda'],
		},

		interFontFeatures: {
      default: ['calt', 'liga', 'kern'],
      numeric: ['tnum', 'salt', 'ss02'],
    },
		extend: {
			colors: {
				"u-navy": "#242E3C",
				"u-red": "#CE3240",
				"u-gold": "#C3996B",
				"u-tan": "#f3ebe2",
			},
		},
	},
	variants: {
    extend: {
      fontWeight: ['hover', 'focus'],
    },
  },
	plugins: [
		require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/ui'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
