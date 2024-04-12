const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const isDevelopment = process.argv[process.argv.indexOf('--mode') + 1] !== 'production';

const mainConfig = {
  entry: "./src/index.jsx",
  output: {
    filename: "webpack.[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin(), 
    new HtmlWebpackPlugin({ template: "./src/index.html" }),  
  ],
  mode: isDevelopment ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: [".js", ".jsx"]
        },
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              isDevelopment && require("react-refresh/babel")
            ].filter(Boolean),
          },
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        type: 'asset'
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      }
    ]
  }
}


if (isDevelopment) {
  mainConfig['devServer'] = {
    static: path.resolve(__dirname, "dist"),
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    // change the client side port number
    port: 3000,
    proxy: {
      '/api':{
        target:'http://localhost:5000',
        pathRewrite: {'^/api' : '/api'},
        secure:false,
        changeOrigin:true
      }
    }
  }
  mainConfig['devtool'] = "source-map";
}

module.exports = [mainConfig]