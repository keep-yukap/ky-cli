const { cwdPath, relPath } = require('../utils');

module.exports = {
  cache: false,
  rootDir: cwdPath(),
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  transform: {
    '\\.js$': relPath('./config/babel.transform.config.js'),
  },
};
