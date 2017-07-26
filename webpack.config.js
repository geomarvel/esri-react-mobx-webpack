var debug = process.env.NODE_ENV !== "prod";
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin  = require('uglifyjs-webpack-plugin');
var webpack = require("webpack");

var copyFiles = new CopyWebpackPlugin([
            { from: __dirname + '/app/index.html' },
            { from: __dirname + '/app/css/*.css' }
]);
module.exports = {
    context: __dirname + "/app",
    entry: {
        javascript: "./js/app.js"
    },
    output: {
        filename: "js/app.js",
        path: __dirname + "/dist",
        libraryTarget: 'amd'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /\.html$/,
                loader: "file-loader?name=[name].[ext]",
            }
        ]
    },
    externals: [
        function(context, request, callback) {
            if (/^dojo/.test(request) ||
                /^dojox/.test(request) ||
                /^dijit/.test(request) ||
                /^esri/.test(request)
            ) {
                return callback(null, "amd " + request);
            }
            callback();
        }
    ],
    plugins: debug ? [
        copyFiles
        ] : [
        copyFiles,
        new UglifyJsPlugin({ mangle: true, sourcemap: true,compress:true }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
