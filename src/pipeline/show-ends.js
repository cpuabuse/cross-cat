/*
	File: src/pipeline/show-ends.js
	cpuabuse.com
*/

/**
 * Put $ at the end of each line.
 */

function processEnds(text) {
	// Edit considering Windows line endings
	return (text.split("\n").join("$\n") + "$").split("\r$\n").join("$\r\n");
}

module.exports = {
	processEnds
};
