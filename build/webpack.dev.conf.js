'use strict'
const path = require('path')
const webpackBaseConfig = require('./webpack.base.conf.js')
const config = require('../config')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const copyWebpackPlugin = require('copy-webpack-plugin')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const webpackDevConfig = webpackMerge(webpackBaseConfig, {
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    contentBase: path.join(__dirname, '../dist/'),
    port: PORT || config.dev.port,
    host: HOST || config.dev.host
  },
  watch: true
})

module.exports = webpackDevConfig
