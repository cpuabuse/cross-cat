/*
	File: src/pipeline/squeeze-blank-flag.ts
	cpuabuse.com
*/

/**
 * Suppress repeated empty output lines.
 */

/**
 * Literally an empty string.
 */
const emptyString: string = "";

/**
 * Literally a carriage return.
 */
const carriageReturn: string = "\r";

// Treat carriage return as empty
let treatCarriageReturnAsNotEmpty: boolean = false;

/**
 * Eliminates repeating blank lines.
 * @param text Text to process
 */
export function processSqueezeBlank(text: string): string {
	/**
	 * Verifies if we consider the string empty.
	 * @param textToCheck Text to check
	 */
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
			let currentLineIsEmpty: boolean = stringIsEmpty(currentLine);

			// Detect double blank lines
			if (currentLineIsEmpty && aggregator.previousLineIsEmpty) {
				return aggregator;
			}
			let result: { previousLineIsEmpty: boolean; text: string } = {
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
