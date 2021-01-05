const withImages = require('next-images');

const distDir = "build";

module.exports = withImages({
  esModule: true,
  distDir,
  webpack(config, option) {
    return config
  }
});