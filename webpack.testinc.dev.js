
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    // ...
    resolve: {
        alias: {
        'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        }
    },
    output: {
        filename: 'inctest.js',
        path: path.resolve(__dirname,'dist'),
    },
};