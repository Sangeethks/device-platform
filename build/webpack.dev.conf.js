'use strict'
const path = require('path')
const webpackBaseConfig = require('./webpack.base.config.js')
const config = require('../config')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const copyWebpackPlugin = require('copy-webpack-plugin')

const HOST = process.env.HOST
const PORT = process.evn.PORT && Number(process.env.PORT)

const webpackDevConfig = webpackMerge(webpackBaseConfig, {
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
  },
  watch: true
})
