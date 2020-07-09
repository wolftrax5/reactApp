/* eslint-disable import/no-extraneous-dependencies */
// base code of webpack to multiple configs
// the estlint come from https://github.com/wesbos/eslint-config-wesbos
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../src');

module.exports = env => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: ['@babel/polyfill', APP_DIR],
      output: {
        path: path.resolve(__dirname, '../dist'),
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
          {
            test: /\.(s*)css$/,
            use: [
              {
                loader: PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
              },
              'css-loader',
              'sass-loader',
            ],
          },
          // -- Assets
          {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'file-loader',
            options: {
              name: 'assets/images/[name].[ext]',
            },
          },
        ],
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
          '@assets': path.resolve(__dirname, '../src/static/assets'),
          '@utils': path.resolve(__dirname, '../src/Utils/'),
          '@ui': path.resolve(__dirname, '../src/UI/'),
          '@containers': path.resolve(__dirname, '../src/containers/'),
        },
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: './index.html',
        }),
        new webpack.DefinePlugin({
          'process.env.VERSION': JSON.stringify(env.VERSION),
          'process.env.PLATFORM': JSON.stringify(env.PLATFORM),
        }),
        new CopyWebpackPlugin({
          patterns: [{ from: 'src/static/assets', to: '../dist/assets' }],
        }),
      ],
      devServer: {
        port: 9001,
      },
    },
  ]);
};
