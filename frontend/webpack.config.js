var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    cache: true,
    entry: './main.jsx',

    //target: 'node',

    output: {
        path:'public',
        filename: 'index.js',
        publicPath: '/'
    },

    plugins: process.env.NODE_ENV === 'production' ? [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),
        new webpack.optimize.DedupePlugin(), //dedupe similar code
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false },
          comments: false,
          sourceMap: false,
          mangle: true,
          minimize: true
        }), //minify everything
        new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks
        new CompressionPlugin({ 
          asset: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.js$|\.jsx$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8
        })
    ] : [],

    module: {
        loaders: [
            { test: /\.js$|\.jsx$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    }
}