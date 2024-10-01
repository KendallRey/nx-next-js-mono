/**
 * Generates a random number multiplied by the provided value.
 * If `minMultiplier` is provided, the random number is ensured to be at least `minMultiplier`.
 *
 * @param value - The value to multiply with the random number.
 * @param minMultiplier - (Optional) A minimum value for the random multiplier.
 *
 * @returns A random number between `minMultiplier * value` and `value`.
 */
export const MathRandom = (value: number, minMultiplier?: number): number => {
  if (minMultiplier) {
    return Math.max(minMultiplier, Math.random()) * value;
  }
  return Math.random() * value;
};
