const { join } = require('path');
const { combine, outputTo } = require('../core/generator.js');
const { buttonComponent } = require('./button.js');

const dir = join(__dirname, '..', 'theme');
outputTo(dir, combine(buttonComponent)).toTypeScript();
