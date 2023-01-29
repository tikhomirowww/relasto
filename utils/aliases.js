const path = require('path');

const getWebpackPathAliases = (paths = {}, rootDir) => Object.entries(paths).reduce(
  (acc, [key, [value]]) => {
    const alias = key.replace('/*', '');
    const path = path.resolve(rootDir, `${value.replace('/*', '/')}`);

    acc[alias] = path;
    return acc;
  },
  {},
);

const getJestPathAliases = (paths) => Object.entries(paths).reduce(
  (acc, [key, [value]]) => {
    const alias = `^${key.replace('/*', '/(.*)$')}`;
    const path = `<rootDir>/${value.replace('/*', '/$1')}`;

    acc[alias] = path;
    return acc;
  },
  {},
);

module.exports = {
  getWebpackPathAliases,
  getJestPathAliases,
};
