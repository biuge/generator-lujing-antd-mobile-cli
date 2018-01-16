const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractTextPlugin = new ExtractTextPlugin({
    filename: 'index-[hash].css',
    disable: process.env.NODE_ENV === 'development',
});

module.exports = {
    devtool: 'none',
    entry: ['./src/index.js'],
    output: {
        path: `${__dirname}/dist`,
        filename: 'index-[hash].js',
    },
    devServer: {
        contentBase: './dist',
        port: 3002,
        host: 'localhost',
        //配置反向代理
        // proxy: {
        //     '/LJWidget/**': {
        //         target: 'http://10.51.12.191:8088/',
        //         changeOrigin: true,
        //         secure: false
        //     },
        //     '/front-end/**': {
        //         target: 'http://localhost:8088/',
        //         changeOrigin: true,
        //         secure: false
        //     }
        // },
        historyApiFallback: true,
        inline: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env',
                            'react',
                            'stage-0',
                        ],
                        plugins: [
                            ['import', { libraryName: 'antd-mobile', style: true }],
                        ],

                    },

                },


            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                    }, {
                        loader: 'less-loader',
                    }],
                    // use style-loader in development
                    fallback: 'style-loader',
                }),
            },
            {
                test: /\.(png)|(jpg)|(gif)$/,
                use: {
                    loader: 'url-loader?limit=20000&name=images/[name]-[hash:8].[ext]',
                },

            },
            {
                test: /\.(woff)|.(woff2)|.(svg)|.(eot)|.(ttf)$/,
                use: {
                    loader: 'url-loader?limit=10000&name=font/[name].[ext]',
                },
            },
        ],
    },
    plugins:   [
        new webpack.BannerPlugin('This file is created by LuJing,版权所有，翻版必究'),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),

        }),
        new HtmlWebpackPlugin({
            template: path.join(`${__dirname}/src`, 'index.html'),
            filename: 'index.html',
            inject: 'body',
            title: '共栖全网协同',
            favicon: './favicon.ico',

        }),
        extractTextPlugin,

    ] 

};
