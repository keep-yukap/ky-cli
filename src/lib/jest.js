const jest = require('jest');
const utils = require('../utils');

module.exports = {
  name: 'jest',
  description: 'unit test with frame jest',
  options: [
    '--coverage',
  ],
  action: (program, ...args) => { // eslint-disable-line
    const jestConfig = [
      '--config',
      utils.relPath('./config/jest.config.js'),
    ];
    if (program.coverage) {
      jestConfig.push('--coverage');
    }
    jest.run(jestConfig);
  },
};
