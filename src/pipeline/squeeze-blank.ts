/*
	File: src/pipeline/squeeze-blank-flag.js
	cpuabuse.com
*/

/**
 * supress repeated empty output lines.
 */

const emptyString = "";
const carriageReturn = "\r";

// Treat carriage return as empty
let treatCarriageReturnAsNotEmpty = false;

// Eliminates repeating blank lines
export function processSqueezeBlank(text: string): string {
	// Verifies if we consider the string empty
	function stringIsEmpty(textToCheck: string): boolean {
		if (textToCheck === emptyString) {
			return true;
		}

		if (treatCarriageReturnAsNotEmpty && textToCheck === carriageReturn) {
			return true;
		}

		return false;
	}

	// Split by the blanks to an array
	let lines: Array<string> = text.split("\n");

	// Define first line; Array is never empty as it is made from string
	let firstLine: string = lines.shift() as string;

	// Iterate through the lines
	return lines.reduce(
		function(aggregator, currentLine) {
			// Determine empty strings
			let currentLineIsEmpty = stringIsEmpty(currentLine);

			// Detect double blank lines
			if (currentLineIsEmpty && aggregator.previousLineIsEmpty) {
				return aggregator;
			}
			let result = {
				previousLineIsEmpty: currentLineIsEmpty,
				text: `${aggregator.text}\n${currentLine}`
			};

			// Return result
			return result;
		},
		{
			previousLineIsEmpty: stringIsEmpty(firstLine),
			text: firstLine
		}
	).text;
}
