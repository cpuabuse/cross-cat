/*
	File: src/pipeline/squeeze-blank-flag.js
	cpuabuse.com
*/

/**
 * supress repeated empty output lines
 */

const emptyString = "";
const carriageReturn = "\r";

// Treat carriage return as empty
var treatCarriageReturnAsNotEmpty = false;

// Eliminates repeating blank lines
function processSqueezeBlank(text) {
	// Verifies if we consider the string empty
	function stringIsEmpty(text) {
		if (text === emptyString) {
			return true;
		}

		if (treatCarriageReturnAsNotEmpty && text === carriageReturn) {
			return true;
		}

		return false;
	}

	// Split by the blanks to an array
	text = text.split("\n");

	// Define first line
	let firstLine = text.shift();

	// Iterate through the lines
	return text.reduce(
		function(result, currentLine) {
			// Determine empty strings
			let currentLineIsEmpty = stringIsEmpty(currentLine);

			// Detect double blank lines
			if (currentLineIsEmpty && result.previousLineIsEmpty) {
				return result;
			} else {
				result.text += `\n${currentLine}`;
				result.previousLineIsEmpty = currentLineIsEmpty;
			}

			// Return result
			return result;
		},
		{
			previousLineIsEmpty: stringIsEmpty(firstLine),
			text: firstLine
		}
	).text;
}

module.exports = {
	processSqueezeBlank
};
