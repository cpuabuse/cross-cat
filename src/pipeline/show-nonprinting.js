/*
	File: src/pipeline/show-nonprinting.js
	cpuabuse.com
	
*/

/**
 * Shows non-printing characters.
 * Code converted from [coreutils repository](https://github.com/coreutils/coreutils/blob/master/src/cat.c).
 */

const emptyString = "";

var treatCarriageReturnAsCharater = false;

function showNonPrinting(text) {
    let resultArray = text.split(emptyString);
	resultArray.forEach(function(character, index, array) {
		// Converts string to ASCII code
        let characterCode = character.charCodeAt();

		if (characterCode >= 32) {
			// If character is in between 32 and 127, we do nothing
			if (characterCode === 127) {
				array[index] = "^?";
			}
			// Process for when the character is above 127
			if (characterCode > 127) {
				// We firstly set to "M-"
				array[index] = "M-";
				if (characterCode >= 160) {
					// For values between 160 and 255, we add respective printable character to "M-"
					if (characterCode < 255) {
						array[index] += String.fromCharCode(characterCode - 128);
					} else {
						// For characters above 255, add "^?" to "M-"
						array[index] += "^?";
					}
				} else {
					// For characters between 127 and 160, add also respective printable charater
					array[index] += "^" + String.fromCharCode(characterCode - 64);
				}
			}
		} else if (
			// "9" is "\t", "10" is "\n", "13" is "\r"
			characterCode !== 9 &&
			characterCode !== 10 &&
			(treatCarriageReturnAsCharater ? true : characterCode !== 13)
		) {
			array[index] = "^" + String.fromCharCode(characterCode + 64);
		}
	});
	return resultArray.join(emptyString);
}

module.exports = {
	showNonPrinting
};
