const path = require('path');
const webpack = require('webpack');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');

const node_modules = fs.readdirSync('node_modules').filter(x => x !== '.bin' );

module.exports = {
  target: 'node',
  output: {
    pathinfo: true,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js']
  },
  externals: [
    nodeExternals()
  ],
  resolveLoader: {
    root: path.resolve(path.join(__dirname, '../node_modules')),
    moduleTemplates: ['*-loader']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "source-map"
      }
    ],
    loaders: [
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin(
      '[file].map', null,
      "[absolute-resource-path]", "[absolute-resource-path]"),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' })
  ]
};
