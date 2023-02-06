const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// const { compilerOptions } = require('../../tsconfig');
// const { getWebpackPathAliases } = require('../../utils/aliases');

const rootDir = path.resolve(__dirname, '../../');
// const pathAliases = getWebpackPathAliases(compilerOptions.paths, rootDir);

module.exports = {
  entry: {
    app: path.join(rootDir, 'src/index.tsx'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:base64:5]',
              },
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeViewBox',
                    active: false,
                  },
                ],
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    filename: '[name].[fullhash:8].bundle.js',
    path: path.join(rootDir, 'build'),
    chunkFilename: '[name].[fullhash:8].bundle.js',
    publicPath: '/',
    clean: true,
    pathinfo: false,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      // eslint: {
      //   enabled: true,
      //   files: './src/**/*.{tsx,ts,js}',
      // },
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
    new HtmlWebpackPlugin({
      template: path.join(rootDir, 'public/index.html'),
      // favicon: path.join(rootDir, 'src/assets/icons/favicon.ico')
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    // alias: pathAliases,
  },
};
