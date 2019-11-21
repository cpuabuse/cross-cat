/*
	File: src/pipeline/number.js
	cpuabuse.com
*/

/**
 * Adds numbers to the begining of the line
 */

function processNumberNonBlank(text) {
	return require("./auxiliary/number.js").number(text, false);
}

module.exports = {
	processNumberNonBlank
};
