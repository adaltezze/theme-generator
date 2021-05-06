import { rgba } from 'polished';
import { create } from '../core/generator.js';
import { linearGradient } from '../core/utils.js';

import { gradients } from '../example/gradients.js';

export const buttonComponent = create('buttonComponent', {
  border: {
    gradients: {
      idle: linearGradient({ colors: gradients().gradient1.colors.map(color => rgba(color, 0.2)) }),
      hover: linearGradient({ colors: gradients().gradient2.colors.map(color => rgba(color, 0.2)) }),
    },
  },
  background: {
    gradients: {
      idle: linearGradient({ colors: gradients().gradient1.colors.map(color => rgba(color, 0.05)) }),
      hover: linearGradient({ colors: gradients().gradient2.colors.map(color => rgba(color, 0.05)) }),
    },
  },
  text: {
    gradients: {
      idle: linearGradient(gradients().gradient1),
      hover: linearGradient(gradients().gradient2),
    },
  },
});
