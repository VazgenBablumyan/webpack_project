const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: `./src/index.js`,
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, './dist'),
        clean:true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: "./dist",
        hot:true,
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    plugins: [new HtmlWebpackPlugin({
        template:"./index.html"
    }),
],
}