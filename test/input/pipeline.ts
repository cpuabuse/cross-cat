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

// Number nonblank
const food: string = "Beef \
Sugar cane \
Beans";

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
const fruitTable: string = "Name	Weight	Color \
Orange	200	Orange \
Apple	250	Red";

// Literal space
const space: string = " ";

// Special characters from 33 to 126
const specialCharacters: string = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";

// Tab
const tabCharacter: string = "\t";

// Above 255
const unicodeCharacter: string = "ハローワールド";

// Extended characters from 128 to 160
function getExtendedLower() {
	let array = new Array();

	// Testing the 2 first characters
	for (i = 128; i < 130; i++) {
		array.push(String.fromCharCode(i));
	}
	return array.join(emptyString);
}

module.exports = {
	food,
	fruitTable,
	specialCharacters,
	numbers,
	letters,
	getExtendedLower,
	emptyString,
	space,
	unicodeCharacter,
	tabCharacter,
	lineFeedCharacter,
	carriageReturnCharacter,
	del,
	extendedHigher
};
