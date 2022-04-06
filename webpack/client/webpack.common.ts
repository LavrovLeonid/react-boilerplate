import path from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { mapTsAliases } from '../../src/shared/utils/map-ts-aliases';
import tsConfig from '../../tsconfig.json';

const cwd = process.cwd();

const commonClientConfiguration: Configuration = {
  mode: 'development',
  entry: path.join(cwd, 'src', 'client', 'index.tsx'),
  output: {
    clean: true,
    publicPath: '/client/',
    path: path.resolve(process.cwd(), 'dist', 'client'),
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: mapTsAliases(tsConfig.compilerOptions.paths),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        framework: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'framework',
          chunks: 'initial',
        },
        vendor: {
          test: /node_modules/,
          name: 'vendors',
          chunks: 'initial',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?|png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'public', 'index.html'),
    }),
  ],
};

export default commonClientConfiguration;
