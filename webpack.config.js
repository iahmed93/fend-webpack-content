const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: './src/client/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: "babel-loader"
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "file-loader"
            }
        ]
    }
}