"use strict";


const path = require('path');

module.exports = {
    mode: "development", 
    entry: "./src/index.js", 
    output: {
      filename: "bundle.js", 
      publicPath: __dirname + '/dist',
    },
    watch: true,
    devtool: "source-map",
    module: {}
    
    
    
  }
