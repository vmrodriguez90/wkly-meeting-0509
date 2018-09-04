const WebPack = require('webpack');
const webpackConfig = require('./webpack.config');

webpackConfig.plugins.push(
  new WebPack.DefinePlugin({
    ENVIRONMENTS: JSON.stringify({
      SERP_HOST: 'https://raqa.rockwellautomation.com/search/${site_lang};keyword=${searchQuery}',
      API_HOST: 'https://es-be-ux-search-qa.cloudhub.io/api/ux/v1/search?queryText='
    })
  }),
);

module.exports = webpackConfig;
