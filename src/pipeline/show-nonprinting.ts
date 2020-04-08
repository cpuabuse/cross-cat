/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Shows non-printing characters.
 * Code converted from [coreutils repository](https://github.com/coreutils/coreutils/blob/master/src/cat.c).
 */

/**
 * An empty string.
 */
const emptyString: string = "";

/**
 * A delete character.
 */
const lastLowerChar: number = 127;

/**
 * A space character.
 */
const printableChar: number = 32;

/**
 * Nbsp.
 */
const middleHigherChar: number = 160;

/**
 * Latin small letter y with diaeresis.
 */
const lastHigherChar: number = 255;

/**
 * Euro sign.
 */
const firstHigherChar: number = 128;

/**
 * At symbol.
 */
const firstAlphaChar: number = 64;

/**
 * New line character.
 */
const newLineChar: number = 10;

/**
 * Tab character.
 */
const tabChar: number = 9;

/**
 * Return character.
 */
const returnChar: number = 13;

/**
 * Do we treat carriage return as character or not.
 */
let treatCarriageReturnAsCharater: boolean = false;

// no-param-reassign is overriden in the body of the fucntion because array is used as a pointer
/**
 * Replaces now printing character with others characters.
 * @param text Text to process
 */
export function showNonPrinting(text: string): string {
	let resultArray: Array<string> = text.split(emptyString);
	resultArray.forEach(function(character, index, array) {
		// Converts string to ASCII code
		let characterCode: number = character.charCodeAt(0);
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
					} else {
						// For characters above 255, add "^?" to "M-"
						array[index] += "^?"; // eslint-disable-line no-param-reassign
					}
				} else {
					// For characters between 127 and 160, add also respective printable charater
					// eslint-disable-next-line no-param-reassign
					array[index] += `^${String.fromCharCode(characterCode - firstAlphaChar)}`;
				}
			}
		} else if (
			// "9" is "\t", "10" is "\n", "13" is "\r"
			characterCode !== tabChar &&
			characterCode !== newLineChar &&
			(treatCarriageReturnAsCharater ? true : characterCode !== returnChar)
		) {
			array[index] = `^${String.fromCharCode(characterCode + firstAlphaChar)}`; // eslint-disable-line no-param-reassign
		}
	});
	return resultArray.join(emptyString);
}
