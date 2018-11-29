'use strict';

const path = require('path');

const resolvePath = (pathname) => path.resolve(__dirname, pathname);

const NODE_ENV = env.dev ? 'development' : 'production';

module.exports = {
  entry: {
    main: './index.web.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
  output: {
    filename: env.dev ? '[name].js' : '[name].[chunkhash].js',
    chunkFilename: env.dev ? '[name].js' : '[name].[chunkhash].js',
    path: resolvePath(`../../webdevice/${NODE_ENV}`),
    publicPath: '/dist/',
  },
};
