const path = require("path");
module.exports = {
	i18n: {
		locales: ["en", "de", "es", "ar", "he", "zh"],
		defaultLocale: "en",
		localeDetection: false,
	},
	localePath: path.resolve("./public/locales"),
	// images: {
	// 	remotePatterns: [
	// 		{
	protocol: 'https',
	hostname: 'po-prod.s3.us-west-1.amazonaws.com',
	// 			// port: '',
	// 			// pathname: '/links/**',
	// 		},
	// 	],
	// },
};
