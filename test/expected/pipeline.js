// Carriage return
const carriageReturnCharacter = "\r";

// DEL
const del = "^?";

// Manually calculated the result (for 128 to 160)
const extendedCharacters = "M-^@M-^A";

// Manually calculated the result (for 160 to 255); but only tested 170 to 172
const extendedHigher = "M-*M-+M-,";

// All of the letters
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Total anount of letters twice
const lettersCount = 52;

// New line or line feed
const lineFeedCharacter = "\n";

// Literal numbers
const numbers = "0123456789";

// Total amount of numbers
const numbersCount = 10;

/**
 * Expected value for test of `processTabs` function.
 */
const fruitTable = "Name^IWeight^IColor \
Orange^I200^IOrange \
Apple^I250^IRed";

// Literal space
const space = " ";

// All of the special characters from 128 to 160
const specialCharacters = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";

// Maximum special character minus first 32 characters, 10 numbers, 26 uppercase letters, 26 lowercase letters, and a space.
const specialCharactersCount = 127 - 32 - 10 - 26 - 26 - 1;

// Tab character for show-nonprinting
const tabCharacter = "\t";

// Above 255
const unicodeCharacter = "M-^?M-^?M-^?M-^?M-^?M-^?M-^?";

module.exports = {
	carriageReturnCharacter,
	del,
	extendedCharacters,
	extendedHigher,
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
