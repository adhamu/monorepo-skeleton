import * as path from 'path'
import * as HtmlWebPackPlugin from 'html-webpack-plugin'
import * as Dotenv from 'dotenv-webpack'
import * as webpack from 'webpack'

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@layout': path.resolve(__dirname, 'src/layout/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@global': path.resolve(__dirname, 'src/'),
    },
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './templates/index.html',
      filename: './index.html',
    }),
    new Dotenv(),
  ],
}

export default config
