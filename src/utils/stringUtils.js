'use strict';

/**
 * Capitalizes the first letter of each whitespace-separated word.
 * Leading/trailing whitespace is removed and internal runs of whitespace
 * are collapsed to a single space. Remaining letters are left unchanged.
 *
 * @param {string} text
 * @returns {string} The transformed text ('' for empty or whitespace-only input).
 */
function capitalizeWords(text) {
  if (text === null || text === undefined) {
    return '';
  }
  if (typeof text !== 'string') {
    throw new TypeError('capitalizeWords expects a string');
  }
  return text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

module.exports = { capitalizeWords };
