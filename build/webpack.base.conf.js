'use strict'
const path = require('path')
const config = require('../config')

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.prod.assetsRoot,
    filename: '[name].js'
  },
  resolve: {
    extensions: [ '.js', '.json' ]
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      // include: [
      //   resolve('src'),
      //   resolve('test')
      // ]
    }]
  }
}
