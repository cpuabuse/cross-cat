const specialCharacters = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";
const specialCharactersCount = 127 - 32 - 10 - 26 - 26 - 1; // Maximum special character minus first 32 characters, 10 numbers, 26 uppercase letters, 26 lowercase letters, and a space.
const numbersCount = 10;
const numbers = "0123456789";
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lettersCount = 52;
const emptyString = "";
function getExtendedCharacters(){
    let array = new Array();
    for(i = 127;i < 161; i++){
        array.push(String.fromCharCode(i));
    }
    return array.join(emptyString);
};

module.exports = {
	specialCharacters,
	specialCharactersCount,
	numbers,
	numbersCount,
	letters,
    lettersCount,
    getExtendedCharacters
};
