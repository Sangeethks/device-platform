'use strict'
const path = require('path')
const config = require('../config')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js',
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
      options: {
        presets: ['es2015']
      },
      include: [
        resolve('src'),
        resolve('test')
      ]
    }]
  }
}
