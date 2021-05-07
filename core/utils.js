/**
 * @param {{ [direction]: string, colors: string[]  }} gradient
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
