const typography = require('@tailwindcss/typography');

module.exports = {
	content: ['./hugo_stats.json'],

	theme: {

		extend: {

			fontFamily: {
			
				'kumar': ['Kumar One'],
			},

		}
	},

	plugins: [typography],
};

