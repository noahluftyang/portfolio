const CopyPlugin = require('copy-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin');
const { resolve } = require('path');

module.exports = {
  entry: './src/server.ts',
  output: {
    filename: '[name].js',
    path: resolve(process.cwd(), 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/u,
        exclude: [/node_modules/u],
        use: 'babel-loader',
      },
      {
        test: /\.ts$/u,
        include: path => path.includes('libraries') || path.includes('modules'),
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'node_modules/.prisma/client', to: 'dist/.prisma/client' }],
    }),
    new NodemonPlugin(),
  ],
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  target: 'node',
};
