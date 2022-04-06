import path from 'path';
import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';
import { mapTsAliases } from '../../src/shared/utils/map-ts-aliases';
import tsConfig from '../../tsconfig.json';

const commonServerConfiguration: Configuration = {
  externalsPresets: { node: true },
  target: 'node',
  externals: [nodeExternals()],
  entry: path.join(process.cwd(), 'src', 'server', 'index.ts'),
  output: {
    clean: true,
    filename: 'index.js',
    path: path.resolve(process.cwd(), 'dist', 'server'),
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
    alias: mapTsAliases(tsConfig.compilerOptions.paths),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

export default commonServerConfiguration;
