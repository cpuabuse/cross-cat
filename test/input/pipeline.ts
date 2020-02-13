/*
	File: test/input/pipeline.ts
	cpuabuse.com
*/

/**
 * Provide the input data.
 */

// Carriage return
const carriageReturnCharacter: string = "\r";

// Delete
const del: string = "^?";

// Number
const food: string = `Beef
Sugar cane
Beans`;

// Literal empty string
const emptyString: string = "";

// Characters between 160 and 255; but tested manually from 170 to 172
const extendedHigher: string = "ª«¬";

// All of the letters, lower case and upper case
const letters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Line feed, new line
const lineFeedCharacter: string = "\n";

// Numbers
const numbers: string = "0123456789";

/**
 * TSV string to test `processTabs` function.
 */
const fruitTable: string = `Name	Weight	Color
Orange	200	Orange
Apple	250	Red`;

/**
 * List to test `processEnds` function.
 */
const fruitList: string = `Apple
Orange`;

// Literal space
const space: string = " ";

// Special characters from 33 to 126
const specialCharacters: string = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";

// Tab
const tabCharacter: string = "\t";

// Above 255
const unicodeCharacter: string = "ハローワールド";

// Extended characters from 128 to 160
function getExtendedLower(): string {
	// An array of characters to return as a string
	let array: string[] = new Array();

	// Minimum character number that function returns in the string
	let extendedLowerMin: number = 128;

	// Maximum character number that function returns in the string
	let extendedLowerMax: number = 130;

	// Testing the 2 first characters
	for (let i: number = extendedLowerMin; i < extendedLowerMax; i++) {
		array.push(String.fromCharCode(i));
	}
	return array.join(emptyString);
}

module.exports = {
	carriageReturnCharacter,
	del,
	emptyString,
	extendedHigher,
	food,
	fruitList,
	fruitTable,
	getExtendedLower,
	letters,
	lineFeedCharacter,
	numbers,
	space,
	specialCharacters,
	tabCharacter,
	unicodeCharacter
};
