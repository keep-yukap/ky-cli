const path = require('path');
const { spawn } = require('child_process');

const { error } = console;

const utils = {
  // open url in default browser
  open(url) {
    let command;
    switch (process.platform) {
      case 'darwin':
        command = 'open';
        break;
      case 'win32':
        command = 'explorer.exe';
        break;
      case 'linux':
        command = 'xdg-open';
        break;
      default:
        error('Can not open browser');
        return;
    }
    spawn(command, [url]);
  },
  // get absolute path to cwd
  cwdPath(...args) {
    return path.resolve(process.cwd(), ...args);
  },
  // get absolute path to __dirname
  relPath(...args) {
    return path.resolve(__dirname, ...args);
  },
};


module.exports = utils;
