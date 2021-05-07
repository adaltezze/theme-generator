/**
 * @typedef {{ [direction]: string, colors: string[] }} Gradient
 */

/**
 * @param {Gradient} gradient
 * @return {{ direction: string | undefined, colors: string[] }}
 */
exports.linearGradient = gradient => {
  const { direction, colors } = gradient;
  return new (class extends String {
    direction = direction;
    colors = [...colors];
    toString = () => `linear-gradient(${direction ? `${direction}, ${colors.join(', ')}` : colors.join(', ')})`;
  });
};

/**
 * @param {Gradient} gradient
 * @param {function(color: string, index: number, colors: string[])} mapFn
 */
exports.gradientColorsMap = (gradient, mapFn) => gradient.colors.map(mapFn);
