import merge from 'webpack-merge';
import LiveReloadPlugin from 'webpack-livereload-plugin';
import commonConfiguration from './webpack.common';

const developmentClientConfiguration = merge(commonConfiguration, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true,
      useSourceHash: true,
    }),
  ],
});

export default developmentClientConfiguration;
