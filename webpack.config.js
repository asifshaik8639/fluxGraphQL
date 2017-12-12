var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: "./public/js/app.js",
    output: {      
      filename: "./public/bundle.js"        
    },
    module: {
      loaders: [
        {
          // "test" is commonly used to match the file extension
          test: /\.js$/,
          exclude: /node_modules/,  
          loader: "babel-loader", // or "babel" because webpack adds the '-loader' automatically
          query: {presets:['react','es2015']}    
        }
      ]
  },
  plugins: [
              new webpack.ProvidePlugin({
                  jQuery: 'jquery',
                  jquery: 'jquery',
                  $: 'jquery'
              })
            ]
}


  