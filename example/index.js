import { join } from 'path';
import { combine, create, extractDir, outputTo } from '../core/generator.js';

import { colors } from './colors.js';
import { gradients } from './gradients.js';
import { buttonComponent } from './button.js';

const config = create('config', combine(colors, gradients));

const dir = join(extractDir(import.meta), '..', 'theme');

outputTo(join(dir, 'dark.json'), combine(config, buttonComponent)).toJSON();
