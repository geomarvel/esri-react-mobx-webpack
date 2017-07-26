var debug = process.env.NODE_ENV !== "prod";
var CopyWebpackPlugin = require('copy-webpack-plugin');
var UglifyJsPlugin  = require('uglifyjs-webpack-plugin');

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
        filename: "app.js",
        path: __dirname + "/dist",
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
    plugins: debug ? [
        copyFiles
        ] : [
        copyFiles,
        new UglifyJsPlugin({ mangle: true, sourcemap: true,compress:true })
    ]
};
