const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
         use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
      test: /\.(png|jpe?g|gif|svg)$/,
      use: [
             {
               loader: "file-loader",
               options: {
                 outputPath: 'images',
                 name: './[name].[ext]'
               }
             }
           ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'template.html',
    }),
      new CopyWebpackPlugin([
      {from:'src/images',to:'images', force: true}
    ]),
  ],
};
