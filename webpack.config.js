const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: "production", // Ensure you're in production mode
  entry: "./src/index.js", // Your entry point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js", // Hashing for cache busting
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // Use Babel for JS and JSX
          options: {
            presets: ['@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader", // Load CSS files
          "postcss-loader"
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add .jsx and .tsx if needed
  },
  optimization: {
    minimize: true, // Enable minification
    minimizer: [
      new TerserPlugin(), // Minify JavaScript
      new CssMinimizerPlugin(), // Minify CSS
    ],
  },
  devtool: "source-map", // Optional: Generate source maps for debugging
};
