/* eslint-disable no-var, vars-on-top */
const fs = require('fs');
const srcDir = __dirname;
const rootDir = `${srcDir}/../`;
const frontendDir = `${srcDir}/frontend/`;


const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => (['.bin'].indexOf(x) === -1))
  .forEach((mod) => { nodeModules[mod] = `commonjs ${mod}`; });

var path;

const cssModulesIdentifier = '[local]';

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: `${frontendDir}/index.jsx`,

  output: {
    path,
    publicPath: '/',
    filename: 'web.bundle.js',
  },

  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [
                ['babel-plugin-react-css-modules', {
                  generateScopedName: cssModulesIdentifier,
                }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                '@babel/plugin-proposal-object-rest-spread',
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: `file-loader?name=[path][name].[ext]&context=${frontendDir}`,
          },
        ],
      },
      {
        test: /\.png$|\.jpe?g$|\.gif$|\.svg$|\.woff$|\.ttf$/,
        use: [
          {
            loader: `file-loader?name=images/[name].[ext]&context=${frontendDir}`,
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: cssModulesIdentifier,
              importLoaders: 2,
            },
          },
          'sass-loader',
          'resolve-url-loader',
        ],
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      frontendDir,
      srcDir,
      rootDir,
      'node_modules',
    ],
  },

  stats: { children: false },
  externals: nodeModules,
};
