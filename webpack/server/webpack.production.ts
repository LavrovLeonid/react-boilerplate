import merge from 'webpack-merge';
import commonServerConfiguration from './webpack.common';

const productionServerConfiguration = merge(commonServerConfiguration, {
  mode: 'production',
});

export default productionServerConfiguration;
