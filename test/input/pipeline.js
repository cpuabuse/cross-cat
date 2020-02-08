// Carriage return
const carriageReturnCharacter = "\r";

// Delete
const del = "^?";

// Number nonblank
const food = "Beef \
Sugar cane \
Beans";

// Literal empty string
const emptyString = "";

// Characters between 160 and 255; but tested manually from 170 to 172
const extendedHigher = "ª«¬";

// All of the letters, lower case and upper case
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Line feed, new line
const lineFeedCharacter = "\n";

// Numbers
const numbers = "0123456789";

/**
 * TSV string to test `processTabs` function.
 */
const fruitTable = "Name	Weight	Color \
Orange	200	Orange \
Apple	250	Red";

// Literal space
const space = " ";

// Special characters from 33 to 126
const specialCharacters = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";

// Tab
const tabCharacter = "\t";

// Above 255
const unicodeCharacter = "ハローワールド";

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
