const path = require('path');
const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: {
        'app': './app/app.module.js'
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/, exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        // Injects bundles in your index.html instead of wiring all manually.
        // It also adds hash to all injected assets so we don't have problems
        // with cache purging during deployment.
        new HtmlWebpackPlugin({
            template: 'app/index.html',
            inject: 'body',
            hash: true
        }),

        // Automatically move all modules defined outside of application directory to vendor bundle.
        // If you are using more complicated project structure, consider to specify common chunks manually.
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                // this assumes your vendor imports exist in the node_modules directory
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),

        // Static Resources
        new CopyWebpackPlugin([
                { from: 'app/phones', to: 'phones' },
                { from: 'app/img', to: 'img' }
            ]),
        // Seperate css file, instead of using it inline within js
        new ExtractTextPlugin({
            filename: '[name].css'
        }),
        // jQuery Support for Angular 1, https://webpack.js.org/plugins/provide-plugin/#usage-jquery-with-angular-1
        new webpack.ProvidePlugin({
            'window.jQuery': 'jquery'
        })
    //
    ]
};
