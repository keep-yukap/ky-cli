#!/usr/bin/env node

const program = require('commander');
const updater = require('pkg-updater');
const pkg = require('../package.json');
const tools = require('../src');

updater({
  pkg,
}).then(() => {
  program
    .version(pkg.version)
    .usage('<command> <options>');

  Object.keys(tools).forEach((item) => {
    const {
      name = '',
      description = '',
      action = () => {},
      options = [],
    } = tools[item];
    const cmd = program
      .command(name)
      .description(description);
    if (options.length) {
      options.forEach((optionItem) => { cmd.option(optionItem); });
    }
    cmd.action((...args) => {
      action.apply(cmd, args);
    });
  });

  program.parse(process.argv);
});
