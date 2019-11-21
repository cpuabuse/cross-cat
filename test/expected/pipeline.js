// All of the special characters
const specialCharacters = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";

// Maximum special character minus first 32 characters, 10 numbers, 26 uppercase letters, 26 lowercase letters, and a space.
const specialCharactersCount = 127 - 32 - 10 - 26 - 26 - 1;

// Total amount of numbers
const numbersCount = 10;

// Literal numbers 
const numbers = "0123456789";

// All of the letters
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Total anount of letters twice
const lettersCount = 52;

// Literal empty string
const emptyString = "";

// Manually calculated the result
const extendedCharacters = "M-^@M-^A"

module.exports = {
	specialCharacters,
	specialCharactersCount,
	numbers,
	numbersCount,
	letters,
    lettersCount,
    extendedCharacters
};
