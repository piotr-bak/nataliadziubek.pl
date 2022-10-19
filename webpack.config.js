const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "src"),
        filename: "index.js",
        publicPath: "/",
    },
    target: "web",
    mode: "development",
    module: {
        rules: [
            {
                test: /\m?.(jsx|js)$/,
                exclude: /node_modules/,
                use: "swc-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(svg|jpg|webp)$/,
                type: "asset/resource",
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    devServer: {
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
