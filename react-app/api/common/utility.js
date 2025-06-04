/**
 * Utility functions for common operations.
 * @module common/utility
 */

/**
 * Delays execution for a specified number of milliseconds.
 * @param {number} waitMs - The number of milliseconds to wait.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
const delay = (waitMs) => {
	return new Promise((resolve) => {
		if (waitMs < 1) {
			resolve();
		} else {
			setTimeout(resolve, waitMs);
		}
	});
};

module.exports = {
	delay
};
