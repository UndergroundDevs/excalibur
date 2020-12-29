const withImages = require('next-images');

const distDir = "build";

module.exports = withImages({
  distDir:'build',
  webpack(config, option) {
    return config
  }
});