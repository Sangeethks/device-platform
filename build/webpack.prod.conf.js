'use strict'
const path = require('path')
const config = require('../config')
const webpackBaseConfig = require('./webpack.base.conf.js')
const copyWebpackPlugin = require('copy-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')

const webpackProdConfig = merge(webpackBaseConfig, {
  mode: 'production',
  devtool: config.prod.devtool,
  output: {
    path: config.prod.assetsRoot,
    filename: '[name].js'
  },
  plugins: [
    new uglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: true,
      parallel: true
    })
  ]
})

module.exports = webpackProdConfig
