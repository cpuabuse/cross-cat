/*
	File: test/expected/pipeline.ts
	cpuabuse.com
*/

/**
 * .Provide the expected data.
 */

// Carriage return
const carriageReturnCharacter: string = "\r";

// DEL
const del: string = "^?";

// Manually calculated the result (for 128 to 160)
const extendedCharacters: string = "M-^@M-^A";

// Manually calculated the result (for 160 to 255); but only tested 170 to 172
const extendedHigher: string = "M-*M-+M-,";

// All of the letters
const letters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Total anount of letters twice
const lettersCount: number = 52;

// New line or line feed
const lineFeedCharacter: string = "\n";

// Literal numbers
const numbers: string = "0123456789";

// Total amount of numbers
const numbersCount: number = 10;

// Number nonblank
const food: string = `1. Beef 
2. Sugar cane 
3. Beans`;

/**
 * Expected value for test of `processTabs` function.
 */
const fruitTable: string = `Name^IWeight^IColor \
Orange^I200^IOrange \
Apple^I250^IRed`;

/**
 * Expected name for test of`processEnds`function.
 */
const fruitList: string = `Apple^Orange`;

// Literal space
const space: string = " ";

// All of the special characters from 128 to 160
const specialCharacters: string = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";

// Maximum special character minus first 32 characters, 10 numbers, 26 uppercase letters, 26 lowercase letters, and a space.
const specialCharactersCount: number = 127 - 32 - 10 - 26 - 26 - 1;

// Tab character for show-nonprinting
const tabCharacter: string = "\t";

// Above 255
const unicodeCharacter: string = "M-^?M-^?M-^?M-^?M-^?M-^?M-^?";

module.exports = {
	carriageReturnCharacter,
	del,
	extendedCharacters,
	extendedHigher,
	food,
	fruitList,
	fruitTable,
	letters,
	lettersCount,
	lineFeedCharacter,
	numbers,
	numbersCount,
	space,
	specialCharacters,
	specialCharactersCount,
	tabCharacter,
	unicodeCharacter
};
