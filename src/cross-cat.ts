#!/usr/bin/env node

/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Entry point for the project.
 */

/**
 * @license ISC
 * ISC License (ISC)
 *
 * Copyright 2020 cpuabuse.com
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

import { Command } from "commander";
import getStdin from "get-stdin";
import { processEnds } from "./pipeline/show-ends";
import { processNumber } from "./pipeline/number";
import { processNumberNonBlank } from "./pipeline/number-nonblank";
import { processSqueezeBlank } from "./pipeline/squeeze-blank";
import { processTabs } from "./pipeline/show-tabs";
import { readFile } from "fs";

/**
 * Literal empty string.
 */
const emptyString: string = "";
const stdinFilename: string = "-";

/**
 * Interface to store flags.
 */
interface Flags {
	showTabsFlag: boolean;
	showAllFlag: boolean;
	numberNonblankFlag: boolean; // "-b"
	showEndsFlag: boolean;
	numberFlag: boolean;
	squeezeBlankFlag: boolean;
	showNonprintingFlag: boolean;
}

/**
 * Parsed arguments from command line.
 */
interface ParsedArgs extends Flags {
	filenames: Array<string>;
	stdin: string;
}

// The variable is too big to have a copy, thus we override no-param-reassign
/**
 * A function performing file processing, mocking behavoir of linux cat function.
 * @param filename File name
 */
function cat(text: string, flags: Flags): void {
	// Process squeeze blank lines
	if (flags.squeezeBlankFlag) {
		text = processSqueezeBlank(text); // eslint-disable-line no-param-reassign
	}

	// Processing to show tabs
	if (flags.showTabsFlag) {
		text = processTabs(text); // eslint-disable-line no-param-reassign
	}

	// Processing to show line numbers
	if (flags.numberNonblankFlag) {
		text = processNumberNonBlank(text); // eslint-disable-line no-param-reassign

		// Processing to show line endings
		if (flags.showEndsFlag) {
			text = processEnds(text); // eslint-disable-line no-param-reassign
		}
	} else {
		// Processing to show line endings
		if (flags.showEndsFlag) {
			text = processEnds(text); // eslint-disable-line no-param-reassign
		}

		if (flags.numberFlag) {
			text = processNumber(text); // eslint-disable-line no-param-reassign
		}
	}
	// Print result to the console
	log(text);
}

/**
 * Prints a text.
 * @param text Text to print.
 */
function log(text: string): void {
	// eslint-disable-next-line no-console
	process.stdout.write(text);
}

/**
 * Prints error to console.
 */
function error(text: string): void {
	// eslint-disable-next-line no-console
	process.stderr.write(`Error: ${text}`);
}

/**
 * Process the args.
 */
async function parseArgs(): Promise<ParsedArgs> {
	let program: Command = new Command();

	// Program metadeta
	program.version("0.0.1");
	program.description(`Concatenate FILE(s) to standard output.

With no FILE, or when FILE is -, read standard input.`);
	program.on("--help", function() {
		// eslint-disable-next-line no-console
		console.log(`
Examples:
    cat f - g  Output f's contents, then standard input, then g's contents.
    cat        Copy standard input to standard output.`);
	});

	// Create new promise for filenames; Used promise for fucntion structure, even though no async code run
	let filenames: Promise<Array<string>> = new Promise(function(resolve) {
		// Get files; The method action is synchronous.
		program.arguments("[filenames...]").action(function(argFiles) {
			// Resolve the promise
			resolve(argFiles.length > 0 ? argFiles : [stdinFilename]);
		});
	});

	// Initialize flags
	program.option("-A, --show-all", "equivalent to -vET");
	program.option("-b, --number-nonblank", "number nonempty output lines, overrides -n");
	program.option("-e", "equivalent to -vE");
	program.option("-E, --show-ends", "display $ at end of each line");
	program.option("-n, --number", "number all output lines");
	program.option("-s, --squeeze-blank", "supress repeated empty output lines");
	program.option("-t", "equivalent to -vT");
	program.option("-T, --show-tabs", "display TAB characters as ^I");
	program.option("-u", "(ignored)");
	program.option("-v, --show-nonprinting", "use ^ and M- notation, except for LFD and TAB");
	program.parse(process.argv);

	/**
	 * Checks if the flag is set to true.
	 */
	function checkFlag(flag: string): boolean {
		if (Object.prototype.hasOwnProperty.call(program, flag)) {
			if (program[flag] === true) {
				return true;
			}
		}
		return false;
	}

	// TODO: Check that verions from parser and -v options do not conflict
	return {
		filenames: await filenames,
		numberFlag: checkFlag("number"),
		numberNonblankFlag: checkFlag("numberNonblank"),
		showAllFlag: checkFlag("showAll"),
		showEndsFlag: checkFlag("showEnds"),
		showNonprintingFlag: checkFlag("showNonprinting"),
		showTabsFlag: checkFlag("showTabs"),
		squeezeBlankFlag: checkFlag("squeezeBlank"),
		stdin: process.stdin.isTTY ? await getStdin() : emptyString
	} as ParsedArgs;
}

/**
 * Main function.
 */
async function main(): Promise<void> {
	// Stdin read or not
	let stdinRead: boolean = false;

	// Contains concatenated files
	let text: string = emptyString;

	// Parses the args
	let parsedArgs: ParsedArgs = await parseArgs();

	// Promises for texts
	let promises: Array<Promise<string>> = new Array() as Array<Promise<string>>;

	// File reading loop
	try {
		parsedArgs.filenames.forEach(function(filename) {
			promises.push(
				new Promise(function(resolve, reject) {
					if (filename === stdinFilename) {
						resolve(stdinRead ? emptyString : parsedArgs.stdin);
						stdinRead = true;
					} else {
						readFile(filename, function(err, data) {
							if (err) {
								reject(filename);
							} else {
								resolve(data.toString());
							}
						});
					}
				})
			);
		});
		for (let i: number = 0; i < promises.length; i++) {
			// For big files await in loop will increase speed
			text += await promises[i]; // eslint-disable-line no-await-in-loop
		}
	} catch (filename) {
		error(`Could not open the file - ${filename}`);
		return;
	}

	cat(text, parsedArgs as Flags);
}

// Calling main
main();
