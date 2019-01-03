const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');

const optimization = {
  namedModules: true,
  namedChunks: true,
  runtimeChunk: {
    name: 'runtime'
  }
}

module.exports = function override(config, env) {
  const [htmlPlugin, ...restPlugins] = config.plugins;

  const newPlugins = [
    new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [
      /main\..*\.js/,
      /runtime/,
    ]),
  ];

  const entry = [
    ...config.entry.slice(0, config.entry.length - 1),
    path.resolve(__dirname, './src/preloader.js'),
  ];

  return {
    ...config,
    entry,
    optimization: {
      ...config.optimization,
      ...optimization,
    },
    plugins: [
      htmlPlugin,
      ...newPlugins,
      ...restPlugins,
    ]
  };
}
