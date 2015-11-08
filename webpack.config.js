var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var DEV = process.env.NODE_ENV === "development";

var plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      "BASE_URI": DEV ? "'/'" : "'/jplecam/'",
      "NODE_ENV": DEV ? "'development'" : "'production'"
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new ExtractTextPlugin("styles.css", {allChunks: true}),
  new webpack.NoErrorsPlugin(),
];

if (DEV) {
  plugins.push(new webpack.HotModuleReplacementPlugin());
}

var config = {
  entry: {
    site: "./src/index.js"
  },
  output: {
    path: DEV ? "./dev/static/" : "./www/static/",
    filename: "[name].js",
    chunkFilename: "chunk.[id].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel"
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract("style", "css!less")
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  plugins: plugins
};

if (DEV) {
  config.output.publicPath = 'http://localhost:8080/static/';

  config.devServer = {
    colors: true,
    contentBase: './dev/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: {
      cached: false
    }
  };
}

module.exports = config;
