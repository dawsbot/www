const webpack = require('webpack');

module.exports = {
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
};
