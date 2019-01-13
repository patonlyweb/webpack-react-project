const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require("path")

module.exports = {
    entry: ["./src/index.js","./assets/sass/index.scss"],
    output: { 
        path: path.join(__dirname, "/dist"),
        filename: "index.js"
    } ,
    module: {
        rules: [
            {
                test:/\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                  }
                }
              },
        ]
    },
    watchOptions: {
        ignored: [
            /node_modules/,
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'index.css',
        }),
        new BrowserSyncPlugin({
            files: [
                'index.html',
                'assets/**/*.css'
            ],
            host: 'localhost',
            port: 3000,
            server: {
                baseDir: ['dist']
            }
        })
    ]
};