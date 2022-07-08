const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
        contact: './src/pages/contact.js',
        home: './src/pages/home.js',
        menu: './src/pages/menu.js'
    },
    plugins: [

        new HtmlWebpackPlugin({

            title: 'Restaurant Page',
            template: './src/template.html'

        }),

    ],

    devtool: 'inline-source-map',

    devServer: {

        static: './dist',

    },

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },

    module: {

        rules: [

            {

                test: /\.css$/i,

                use: ['style-loader', 'css-loader'],

            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,

                type: 'asset/resource',

            },

        ],

    },
    optimization: {

        runtimeChunk: 'single',

    },
};