#! /usr/bin/env node
const fs = require('fs');
const path = require('path');

const { execYarn } = require('../index');

async function main() {
  const args = [];

  await Promise.all(process.argv.slice(2).map(async(arg, pos) => {
    try {
      const resolvedPath = path.resolve(arg);

      if (await exists(resolvedPath)) args[pos] = resolvedPath;
      else args[pos] = arg;
    } catch (err) {
      console.info(err.message);
      args[pos] = arg;
    }
  }));
  execYarn(args);
}

function exists(pathname) {
  return new Promise(resolve => {
    fs.stat(pathname, err => {
      if (err) resolve(false);
      else resolve(true);
    });
  });
}

main();
