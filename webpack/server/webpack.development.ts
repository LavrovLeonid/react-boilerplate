import path from 'path';
import NodemonPlugin from 'nodemon-webpack-plugin';
import merge from 'webpack-merge';
import commonServerConfiguration from './webpack.common';

const developmentServerConfiguration = merge(commonServerConfiguration, {
  mode: 'development',
  plugins: [
    new NodemonPlugin({
      script: path.resolve(process.cwd(), 'dist', 'server', 'index.js'),
    }),
  ],
});

export default developmentServerConfiguration;
