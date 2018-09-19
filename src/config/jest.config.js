// const babelJest = require('babel-jest');
const utils = require('../utils');

// const transformer = babelJest.createTransformer({
//   passPerPreset: true,
//   presets: [
//     '@babel/preset-env',
//     '@babel/preset-react',
//   ].map(require.resolve),
//   plugins: [
//     '@babel/plugin-transform-runtime',
//   ].map(require.resolve),
// });

// const transformer = babelJest.createTransformer({
//   passPerPreset: true,
//   presets: [
//     'babel-preset-env',
//     'babel-preset-react',
//   ].map(require.resolve),
//   plugins: [
//     'babel-plugin-transform-runtime',
//   ].map(require.resolve),
// });

module.exports = {
  verbose: true,
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  moduleFileExtensions: [
    'json',
    'js',
    'jsx',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  rootDir: utils.cwdPath(),
};
