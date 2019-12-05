/*
	File: src/cross-cat.ts
	cpuabuse.com
*/

/**
 * Entry point for the project.
 */

import { readFile } from "fs";
import { processSqueezeBlank } from "./pipeline/squeeze-blank";
import { processTabs } from "./pipeline/show-tabs";
import { processNumberNonBlank } from "./pipeline/number-nonblank";
import { processEnds } from "./pipeline/show-ends.js";
import { processNumber } from "./pipeline/number.js";

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
				error(err);
			} else {
				let fileData = data.toString();

				// Process squeeze blank lines
				if (flags.squeezeBlankFlag) {
					fileData = processSqueezeBlank(fileData);
				}

				// Processing to show tabs
				if (flags.showTabsFlag) {
					fileData = processTabs(fileData);
				}

				// Processing to show line numbers
				if (flags.numberNonBlankFlag) {
					fileData = processNumberNonBlank(fileData);

					// Processing to show line endings
					if (flags.showEndsFlag) {
						fileData = processEnds(fileData);
					}
				} else {
					// Processing to show line endings
					if (flags.showEndsFlag) {
						fileData = processEnds(fileData);
					}

					if (flags.numberFlag) {
						fileData = processNumber(fileData);
					}
				}
				// Print result to the console
				log(fileData);
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

function error(text: string): void {
    let text = "Error. Something wrong!"
	// eslint-disable-next-line no-console
	console.error("text");
}

cat(arguments);