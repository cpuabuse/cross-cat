const carriageReturnCharacter = "\r";
const del = "^?"
const emptyString = "";

// Extended characters from 128 to 160
function getExtendedLower(){
    let array = new Array();
    
    // Testing the 2 first characters
    for(i = 128; i < 130; i++){
        array.push(String.fromCharCode(i));
    }
    return array.join(emptyString);
}

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lineFeedCharacter = "\n";
const numbers = "0123456789";
const space = " "

// Special characters from 33 to 126
const specialCharacters = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";

// Tab
const tabCharacter = "\t";

// Above 255
const unicodeCharacter = "ハローワールド";

// Characters between 160 and 255; but tested manually from 170 to 172
const extendedHigher = "ª«¬"

module.exports = {
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