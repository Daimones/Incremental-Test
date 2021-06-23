
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'inctest.js',
        path: path.resolve(__dirname,'dist'),
    },
};