// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
    mode: 'development',
    target: 'node',
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        alias: {
            'api-config': path.resolve(__dirname, 'src/config/'),
            'api-controller': path.resolve(__dirname, 'src/controller/'),
            'api-middleware': path.resolve(__dirname, 'src/middleware/'),
            'api-utils': path.resolve(__dirname, 'src/utils/'),
        },
    },
    devtool: 'inline-source-map',
    entry: {
        app: ['./src/index.ts'],
    },
    output: {
        path: path.resolve(__dirname, 'bundle'),
        filename: 'bundle.js',
        publicPath: 'bundle/',
    },
    module: {
        rules: [
            {
                test: /\.ts$|.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};
