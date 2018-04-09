'use strict'
const path = require('path'),
const config = require('config')
const webpackBaseConfig = require('./webpack.base.conf.js')
const copyWebpackPlugin = require('copy-webpack-plugin')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')
