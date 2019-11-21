/*
	File: src/pipeline/auxiliary/number.js
	cpuabuse.com
*/

/**
 * Adds numbers to the begining of the line
 */

const emptyString = "";
const space = " ";
const tabulationSpace = " ";
var treatCarriageReturnAsNotEmpty = false;

function textIsEmpty(text) {
	return text.length === 0 || treatCarriageReturnAsNotEmpty // Account for Windows line endings
		? false
		: text === "\r";
}

function number(text, countBlank) {
	// Split the text into lines
	text = text.split("\n");

	//
	let maxNumberOfDigits;
	if (countBlank) {
		maxNumberOfDigits = text.length.toString().length;
	} else {
		maxNumberOfDigits = text
			.filter(function(line) {
				return line.length > 0;
			})
			.length.toString().length;
	}

	// Calculates initial spaces
	let initialSpaces = new Array(maxNumberOfDigits - 1) // Minus 1 because the first lines number digit will take one
		.fill(space)
		.join(emptyString);

	// Define first line; Change the first line if its empty, only if we count blanks
	let displayNumber = 1;
	let firstLine = text.shift();
	if (
		firstLine.length === 0 || treatCarriageReturnAsNotEmpty // Account for Windows line endings
			? false
			: firstLine === "\r"
	) {
		if (countBlank) {
			firstLine = `${initialSpaces}1`;
		} else {
			displayNumber = 0;
		}
	} else {
		firstLine = `${initialSpaces}1${tabulationSpace}${firstLine}`; // Special case for empty files
	}

	// If the array is empty at this point, the result of reduce will be an object where text property equals to first line
	return text.reduce(
		function(result, lineText) {
			// The number to display; currentLineNumber is always less than numberOfLines, thus it is safe to add 2 to it; 2 because we add one since we start from 1 and not 0, and another 1, since the first line is shifted and given as initial value to reduce; If we dont count blanks, increment only on non blank
			if (countBlank) {
				displayNumber++;
			} else {
				if (!textIsEmpty(lineText)) {
					displayNumber++;
				}
			}

			// Generates spaces
			if (result.previousNumberOfDigits !== displayNumber.toString().length) {
				// Because the amount of spaces in initial variable is exactly how many spaces there are in the first line, it is safe to pop up until the last line, where spaces will become an empty string
				let spacesArray = [...result.spaces];
				spacesArray.pop();
				result.spaces = spacesArray.join(emptyString);

				// Incremeneting the number of digits for next lines
				result.previousNumberOfDigits++;
			}

			// Return without space after the number if the line text is empty; Do not change anything if the line is empty, and we dont count blanks
			if (textIsEmpty(lineText)) {
				if (countBlank) {
					result.text += `\n${result.spaces}${displayNumber.toString()}`;
				} else {
					result.text += "\n";
				}
			} else {
				result.text += `\n${
					result.spaces
				}${displayNumber.toString()}${tabulationSpace}${lineText}`;
			}
			return result; // It is important to return result by reference, not to create new primitives
		},
		{
			previousNumberOfDigits: 1, // Number of digits for the first line
			text: firstLine,
			spaces: initialSpaces
		}
	).text; // Our accumulator is an object containing text, thus we assign a text property
}

module.exports = {
	number
};
