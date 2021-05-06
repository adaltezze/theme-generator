import fse from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

/**
 * @param {string} configName
 * @param {Object} config
 * @return {Function}
 */
export const create = (configName, config) => {
  const fn = () => config;
  fn.configName = configName;
  fn.config = config;

  return fn;
};

/**
 * @param {...({ configName: string, config: Object })} configs
 * @return {Object}
 */
export const combine = (...configs) => {
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
export const outputTo = (path, config) => ({
  toJSON: () => fse.outputFileSync(path, JSON.stringify(config, null, 2)),
});

/**
 * @param {ImportMeta} meta
 * @return {string}
 */
export const extractDir = meta => dirname(fileURLToPath(meta.url));
