/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  webpack: (config, { isServer }) => {

    if (!isServer) {
      config.target = 'electron-renderer';
      config.node = {
        __dirname: true,
      }
    }
    return config;
  },
};


// next.config.js
module.exports = {
	images: {
		domains: ['cdn.sanity.io']
	}
};