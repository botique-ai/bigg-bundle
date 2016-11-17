import webpack = require("webpack");

const config = require('../../assets/dev.webpack.config');

export function createCompiler({entries}) {
  const webpackEntry = {};

  entries.forEach((entry) => {
    if (entry.output) {
      webpackEntry[entry.output] = entry.src;
    }
    else {
      webpackEntry['build/' + entry.name + '/bundle'] = entry.src;
    }
  });

  config.entry = webpackEntry;

  return webpack(config);
}