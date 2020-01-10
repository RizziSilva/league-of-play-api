const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    target: 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        alias: {
            'api-utils': path.resolve(__dirname, 'src/utils/'),
            'api-controller': path.resolve(__dirname, 'src/controller/'),
            'api-middleware': path.resolve(__dirname, 'src/middleware/'),
        },
    },
    entry: {
        app: ['./src/index.ts'],
    },
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js',
        publicPath: 'bundle/',
    },
    externals: [nodeExternals({ whitelist: 'webpack/hot/poll?1000' })],
};
