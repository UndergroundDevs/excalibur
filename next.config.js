const withImages = require('next-images');

const distDir = "build";

module.exports = withImages({
  esModule: true,
  webpack(config, option) {
    return config
  }
});