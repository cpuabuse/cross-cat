/*
	File: src/pipeline/number.js
	cpuabuse.com
*/

/**
 * Adds numbers to the begining of the line.
 */

function processNumber(text) {
	return require("./auxiliary/number.js").number(text, true);
}

module.exports = {
	processNumber
};
