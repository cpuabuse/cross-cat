/*
	File: src/pipeline/show-tabs.js
	cpuabuse.com
*/

/**
 * Replace TAB characters description.
 */

function processTabs(text) {
	return text.split("\t").join("^I");
}

module.exports = {
	processTabs
};
