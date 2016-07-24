const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './src/client/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'react-hot-loader', 'babel-loader' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader?limit=25000'
      },
      { test: /\.woff$/, loader: 'url-loader?limit=10240&mimetype=application/font-woff' },
      { test: /\.ttf$/, loader: 'url-loader?limit=10240&mimetype=application/x-font-ttf' },
      { test: /\.eot$/, loader: 'url-loader?limit=10240&mimetype=application/vnd.ms-fontobject' },
      { test: /\.woff2$/, loader: 'url-loader?limit=10240&mimetype=application/font-woff' },
      { test: /\.svg$/, loader: 'url-loader?limit=10240' },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'components']
  },
};
