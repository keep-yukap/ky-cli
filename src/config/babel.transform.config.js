const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  presets: [
    'babel-preset-react',
    'babel-preset-env',
  ].map(require.resolve),
  plugins: [
    'babel-plugin-transform-runtime',
  ].map(require.resolve),
});
