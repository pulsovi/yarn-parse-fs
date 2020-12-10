const childProcess = require('child_process');

const yarnPath = require.resolve('yarn/bin/yarn.js');

function execYarn(args) {
  childProcess.fork(yarnPath, args);
}

module.exports = { execYarn };
