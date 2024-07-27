const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/js/lib.js',
  output: {
    path: path.join(__dirname, './dist/lib'),
    filename: 'regexper.js',
    library: 'RegExper',
    libraryTarget: 'umd',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name]-[hash].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: require.resolve('snapsvg'),
        loader: 'imports-loader',
        options: {
          wrapper: 'window',
          additionalCode: 'module.exports = 0;'
        }
      },
      {
        test: /\.peg$/,
        loader: require.resolve('./lib/canopy-loader')
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  }
};
