"use strict";
/*
    File: src/pipeline/show-nonprinting.ts
    cpuabuse.com
    
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Shows non-printing characters.
 * Code converted from [coreutils repository](https://github.com/coreutils/coreutils/blob/master/src/cat.c).
 */
const emptyString = "";
const lastLowerChar = 127;
const printableChar = 32;
// The characters are for some reason treated differently for 160 and above
const middleHigherChar = 160;
const lastHigherChar = 255;
const firstHigherChar = 128;
const firstAlphaChar = 64;
const newLineChar = 10;
const tabChar = 9;
const returnChar = 13;
let treatCarriageReturnAsCharater = false;
// no-param-reassign is overriden in the body of the fucntion because array is used as a pointer
function showNonPrinting(text) {
    let resultArray = text.split(emptyString);
    resultArray.forEach(function (character, index, array) {
        // Converts string to ASCII code
        let characterCode = character.charCodeAt(0);
        if (characterCode >= printableChar) {
            // If character is in between 32 and 127, we do nothing
            if (characterCode === lastLowerChar) {
                array[index] = "^?"; // eslint-disable-line no-param-reassign
            }
            // Process for when the character is above 127
            if (characterCode > lastLowerChar) {
                // We firstly set to "M-"
                array[index] = "M-"; // eslint-disable-line no-param-reassign
                if (characterCode >= middleHigherChar) {
                    // For values between 160 and 255, we add respective printable character to "M-"
                    if (characterCode < lastHigherChar) {
                        // eslint-disable-next-line no-param-reassign
                        array[index] += String.fromCharCode(characterCode - firstHigherChar);
                    }
                    else {
                        // For characters above 255, add "^?" to "M-"
                        array[index] += "^?"; // eslint-disable-line no-param-reassign
                    }
                }
                else {
                    // For characters between 127 and 160, add also respective printable charater
                    // eslint-disable-next-line no-param-reassign
                    array[index] += `^${String.fromCharCode(characterCode - firstAlphaChar)}`;
                }
            }
        }
        else if (
        // "9" is "\t", "10" is "\n", "13" is "\r"
        characterCode !== tabChar &&
            characterCode !== newLineChar &&
            (treatCarriageReturnAsCharater ? true : characterCode !== returnChar)) {
            array[index] = `^${String.fromCharCode(characterCode + firstAlphaChar)}`; // eslint-disable-line no-param-reassign
        }
    });
    return resultArray.join(emptyString);
}
exports.showNonPrinting = showNonPrinting;
//# sourceMappingURL=show-nonprinting.js.map