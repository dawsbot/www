const webpack = require('webpack');
const withImages = require('next-images');

module.exports = withImages({
  target: 'serverless',
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    const { plugins } = config;
    return {
      ...config,
      plugins: [
        ...(plugins || []),
        new webpack.ProvidePlugin({
          Glamor: 'glamor/react'
        })
      ]
    };
  }
});
