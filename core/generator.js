const path = require('path');
const fse = require('fs-extra');
const kindOf = require('kind-of');
const javascript = require('javascript-stringify');

/**
 * @param {Object} config
 */
const createConfig = config => {
  return Object.entries(config).reduce((acc, [key, value]) => {
    switch (kindOf(value)) {
      case 'object':
        acc[key] = createConfig(value);
        break;
      case 'function':
        acc[key] = value(config);
        break;
      default:
        acc[key] = value;
        break;
    }

    return acc;
  }, {});
};

/**
 * @param {string} configName
 * @param {Object} config
 * @return {Function}
 */
exports.create = (configName, config) => {
  const createdConfig = createConfig(config);

  const fn = () => createdConfig;
  fn.configName = configName;
  fn.config = createdConfig;

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

/**
 * @param {string} dir
 * @param {Object} config
 * @return {{ toJSON: (function(): *), toTypeScript: (function(): *) }}
 */
exports.outputTo = (dir, config) => ({
  toJSON: () => fse.outputFileSync(path.join(dir, 'theme.json'), JSON.stringify(config, null, 2)),
  toTypeScript: () => fse.outputFileSync(path.join(dir, 'theme.ts'), `export default ${javascript.stringify(JSON.parse(JSON.stringify(config)), null, '  ')} as const;\n`),
});
