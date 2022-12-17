/**
 * @type {import('next').NextConfig}
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')([
  '@babel/preset-react',
]);

const env = {
  API_BASE_URL: process.env.API_BASE_URL,
  COOKIE_TOKEN_EXPIRATION_DAYS: process.env.COOKIE_TOKEN_EXPIRATION_DAYS,
};

module.exports = withTM({
  env,
  images: {
    domains: [
      'localhost',
      '94.250.252.54'
    ]
  },
});
