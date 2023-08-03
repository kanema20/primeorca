const { i18n } = require("./next-i18next.config");
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV !== "production",
  runtimeCaching,
});

module.exports = withPWA({
  i18n,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'po-prod.s3.us-west-1.amazonaws.com',
        // port: '',
        // pathname: '/links/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/create-checkout-session",
        destination: "http://localhost:8080/create-checkout-session",
      },
    ];
  },
});
