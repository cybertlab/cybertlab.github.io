/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,

  // fuck js:
  basePath: '/website',
  // fuck js: fuck next.js
  assetPrefix: '/website/',

  // fuck js: fuck next.js
  publicRuntimeConfig: {
    // Will be available on both server and client
    // staticFolder: '/website/public',
    basePath: '/website',
  },

  // async redirects() {
  //   return [
  //     {
  //       source: "/assets/",
  //       destination: "/website/assets/", // Matched parameters can be used in the destination
  //       permanent: true,
  //     },
  //   ];
  // },

  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});
