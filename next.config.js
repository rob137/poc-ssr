require('dotenv').config();
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript(withSass({
  enableSvg: true,
  webpack (config) {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    );
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    return config;
  }
}));
