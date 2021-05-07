const fse = require('fs-extra');

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

/**
 * @param {string} path
 * @param {Object} config
 * @return {{ toJSON: (function(): *)}}
 */
exports.outputTo = (path, config) => ({
  toJSON: () => fse.outputFileSync(path, JSON.stringify(config, null, 2)),
});
