
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    // ...
    resolve: {
        extensions: ['.tsx','.ts','.js']
    },
    output: {
        filename: 'inctest.js',
        path: path.resolve(__dirname,'dist'),
    },
    resolve: {
            alias: {
                vue: 'vue/dist/vue.js'
            },
        },
};