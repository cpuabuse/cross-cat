// Tab
const tabCharacter = "\t";

// New line or line feed
const lineFeedCharacter = "\n";

// Carriage return
const carriageReturnCharacter = "\r";

// Literal space
const space = " "

// DEL
const del = "^?"

// Manually calculated the result (for 128 to 160)
const extendedCharacters = "M-^@M-^A"

// All of the letters
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Total anount of letters twice
const lettersCount = 52;

// Literal numbers 
const numbers = "0123456789";

// Total amount of numbers
const numbersCount = 10;


// All of the special characters from 128 to 160
const specialCharacters = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";

// Maximum special character minus first 32 characters, 10 numbers, 26 uppercase letters, 26 lowercase letters, and a space.
const specialCharactersCount = 127 - 32 - 10 - 26 - 26 - 1;

// Manually calculated the result (for 160 to 255); but only tested 170 to 172
const extendedHigher = "M-*M-+M-,";

// Above 255
const unicodeCharacter = "M-^?M-^?M-^?M-^?M-^?M-^?M-^?";

module.exports = {
	specialCharacters,
	specialCharactersCount,
	numbers,
	numbersCount,
	letters,
    lettersCount,
    extendedCharacters,
    space,
    unicodeCharacter,
    lineFeedCharacter,
    carriageReturnCharacter,
    tabCharacter, 
    del,
    extendedHigher
};
