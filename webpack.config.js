var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  context:path.resolve( __dirname + '/app'),
   entry:  [
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server",
    "./index.js"
  ],
  output:{
  	path:__dirname + "/app",
  	filename:"bundle.js",
  //   publicPath: "http://localhost:9090/build/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css', { allChunks: true }),
  ],
  module:{
  	loaders:[
  		  {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        query: {
          presets: ["es2015"],  
        }
        
      },
             {test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
  	]
  },
 devServer:{
    inline:true,
    port:8080
  },
   debug: true
}