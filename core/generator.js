const path = require('path');
const fse = require('fs-extra');
const javascript = require('javascript-stringify');

/**
 * @param {string} configName
 * @param {Object} config
 * @return {Function}
 */
exports.create = (configName, config) => {
  const fn = () => config;
  fn.configName = configName;
  fn.config = config;

  return fn;
};

/**
 * @param {...({ configName: string, config: Object })} configs
 * @return {Object}
 */
exports.combine = (...configs) => {
  const combinedConfig = {};
  configs.forEach(({ configName, config }) => {
    combinedConfig[configName] = config;
  });
  return combinedConfig;
};

const jsToFile = {};

/**
 * @param {string} dir
 * @param {Object} config
 * @return {{ toJSON: (function(): *), toTypeScript: (function(): *) }}
 */
exports.outputTo = (dir, config) => ({
  toJSON: () => fse.outputFileSync(path.join(dir, 'theme.json'), JSON.stringify(config, null, 2)),
  toTypeScript: () => fse.outputFileSync(path.join(dir, 'theme.ts'), `export default ${javascript.stringify(JSON.parse(JSON.stringify(config)), null, '  ')} as const;\n`),
});
