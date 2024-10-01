/**
 * Trims a string and removes all non-alphanumeric characters, leaving only letters and numbers.
 *
 * @param {string} str - The input string to process.
 * @returns {string} - The processed string containing only alphanumeric characters.
 *
 * @example
 * ```ts
 * const result = cleanString("  Hello, World!123  ");
 * console.log(result); // Output: "HelloWorld123"
 * ```
 */
export const cleanString = (str: string): string => {
  return str.trim().replace(/[^a-zA-Z0-9]/g, "");
};

/**
 * Removes all special characters from the string except for underscores (_), hyphens (-), and dots (.).
 *
 * @param {string} str - The input string to clean.
 * @returns {string} - The cleaned string with only alphanumeric characters, underscores, hyphens, and dots.
 *
 * @example
 * ```ts
 * const result = removeSpecialChars("Hello! This_is a-test: with.special#characters.");
 * console.log(result); // Output: "HelloThis_is-a-test.withspecialcharacters"
 * ```
 */
export function removeSpecialChars(str: string): string {
  return str.replace(/[^a-zA-Z0-9_.-]/g, "");
}
