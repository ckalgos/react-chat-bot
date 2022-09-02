const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: glob.sync(
        "./src/**/*.scss",
    ),
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.scss$/,
                        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
                    },
                    {
                        exclude: [/\.(js|jsx|mjs|ts|tsx)$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: `./static/[name].[ext]`
                        },
                    }
                ]
            }

        ]
    },
    resolve: {
        extensions: [".scss"]
    },
    output: {
        filename: 'main.css',
        path: path.resolve(__dirname, "./lib/styles")
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        })
    ]
};
