
/**
 * Combines multiple class names into a single string.
 * @param {...string} classes - Class names to combine.
 * @returns {string} - Combined class names.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format price with currency symbol
 * @param {number} price - The price to format
 * @param {string} currencySymbol - Currency symbol to use
 * @returns {string} - Formatted price with currency symbol
 */
export function formatPrice(price, currencySymbol = '$') {
  return `${currencySymbol}${price.toFixed(2)}`;
}

/**
 * Truncate text to a maximum length
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length before truncating
 * @returns {string} - Truncated text
 */
export function truncateText(text, maxLength) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}
