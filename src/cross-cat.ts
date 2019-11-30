/*
	File: src/cross-cat.ts
	cpuabuse.com
*/

/**
 * Entry point for the project.
 */

import { readFile } from "fs";

const helpText = `
Usage: cat [OPTION]... [FILE]...
Concatenate FILE(s) to standard output.

With no FILE, or when FILE is -, read standard input.

    -A, --show-all           equivalent to -vET
    -b, --number-nonblank    number nonempty output lines, overrides -n
    -e                       equivalent to -vE
    -E, --show-ends          display $ at end of each line
    -n, --number             number all output lines
    -s, --squeeze-blank      supress repeated empty output lines
    -t                       equivalent to -vT
    -T, --show-tabs          display TAB characters as ^I
    -u                       (ignored)
    -v, --show-nonprinting   use ^ and M- notation, except for LFD and TAB
        --help     display this help and exit
        --version  output version information and exit

Examples:
    cat f - g  Output f's contents, then standard input, then g's contents.
    cat        Copy standard input to standard output.
`;

/**
 * Interface to store flags.
 */
interface Flags {
	helpFlag: boolean;
	showTabsFlag: boolean;
	showAllFlag: boolean;
	numberNonBlankFlag: boolean; // "-b"
	showEndsFlag: boolean;
	numberFlag: boolean;
	squeezeBlankFlag: boolean;
	versionFlag: boolean;
	showNonprintingFlag: boolean;
}

/**
 * A function performing file processing, mocking behavoir of linux cat function.
 * @param filename File name
 */
function cat(filename: string, flags: Flags): void {
	// Processing help flag
	if (flags.helpFlag) {
		log(helpText);
	} else {
		readFile(filename, function(err, data) {
			if (err) {
				console.error(err);
			} else {
				fileData = data.toString();

				// Process squeeze blank lines
				if (squeezeBlankFlag) {
					fileData = require("./src/pipeline/squeeze-blank.js").processSqueezeBlank(
						fileData
					);
				}

				// Processing to show tabs
				if (showTabsFlag) {
					fileData = require("./src/pipeline/show-tabs.js").processTabs(
						fileData
					);
				}

				// Processing to show line numbers
				if (numberNonBlankFlag) {
					fileData = require("./src/pipeline/number-nonblank.js").processNumberNonBlank(
						fileData
					);

					// Processing to show line endings
					if (showEndsFlag) {
						fileData = require("./src/pipeline/show-ends.js").processEnds(
							fileData
						);
					}
				} else {
					// Processing to show line endings
					if (showEndsFlag) {
						fileData = require("./src/pipeline/show-ends.js").processEnds(
							fileData
						);
					}

					if (numberFlag) {
						fileData = require("./src/pipeline/number.js").processNumber(
							fileData
						);
					}
				}
				// Print result to the console
				console.log(fileData);
			}
		});
	}
}

/**
 * Prints a text.
 * @param text Text to print.
 */
function log(text: string): void {
	// eslint-disable-next-line no-console
	console.log(text);
}

cat(arguments);