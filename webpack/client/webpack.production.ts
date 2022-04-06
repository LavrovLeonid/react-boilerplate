import merge from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import commonConfiguration from './webpack.common';

const productionClientConfiguration = (environment: Record<string, string>) =>
  merge(commonConfiguration, {
    mode: 'production',
    output: {
      filename: '[name]-chunk-[contenthash].js',
    },
    devtool: 'source-map',
    plugins: environment.analyze ? [new BundleAnalyzerPlugin()] : undefined,
  });

export default productionClientConfiguration;
