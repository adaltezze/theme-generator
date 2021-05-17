const { rgba, darken } = require('polished');
const { create } = require('../core/generator');

const { color1, color2, color8 } = require('./colors').colors();

/**
 * @type {Function}
 */
exports.buttonComponent = create('buttonComponent', {
  primary: {
    background: {
      colors: {
        idle: color1,
        hover: color8,
      },
      text: {
        colors: {
          idle: color2,
        },
      },
      ripple: {
        colors: {
          idle: ({ primary }) => darken(0.05, primary.background.colors.hover),
        },
      },
    },
  },
  secondary: {
    background: {
      colors: {
        idle: rgba(color2, 0.1),
        hover: rgba(color1, 0.1),
      },
    },
    text: {
      colors: {
        idle: color2,
      },
    },
    ripple: {
      colors: {
        idle: ({ secondary }) => darken(0.05, secondary.background.colors.hover),
      },
    },
  },
});
