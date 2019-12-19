/*
	File: src/cross-cat.ts
	cpuabuse.com
*/

/**
 * Entry point for the project.
 */

import { Command } from "commander";
import { readFile } from "fs";
import { stdin } from "process";
import { processSqueezeBlank } from "./pipeline/squeeze-blank";
import { processTabs } from "./pipeline/show-tabs";
import { processNumberNonBlank } from "./pipeline/number-nonblank";
import { processEnds } from "./pipeline/show-ends";
import { processNumber } from "./pipeline/number";

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
interface ParsedArgs {
	filenames: Array<string>;
	stdin: string;
}

/**
 * A function performing file processing, mocking behavoir of linux cat function.
 * @param filename File name
 */
function cat(filename: string, flags: Flags): void {
	readFile(filename, function(err, data) {
		if (err) {
			error(`Could not open the file - ${filename}`);
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
			if (flags.numberNonblankFlag) {
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

/**
 * Prints a text.
 * @param text Text to print.
 */
function log(text: string): void {
	// eslint-disable-next-line no-console
	console.log(text);
}

function error(text: string): void {
	// eslint-disable-next-line no-console
	console.error(`Error: ${text}`);
}

/**
 * Process the args.
 */
function parseArgs(): ParsedArgs {
	let program = new Command();
	let files: Array<string>; // Array of files that user provides via command line
	let stdinData: string = emptyString; // Data received from stdin, processed when files arguments were not privided in cmd

	// Populate stdin
	stdin.once("readable", function() {
		for (
			let chunk: string = stdin.read();
			chunk !== null;
			chunk = stdin.read()
		) {
			stdinData += chunk;
		}
	});

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

	// Get files: The method action is synchronous.
	program.arguments("[files...]").action(function(argFiles) {
		if (files.length > 0) {
			files = argFiles;
		} else {
			files = [stdinFilename];
		}
	});

	// Initialize flags
	program.option("-A, --show-all", "equivalent to -vET");
	program.option(
		"-b, --number-nonblank",
		"number nonempty output lines, overrides -n"
	);
	program.option("-e", "equivalent to -vE");
	program.option("-E, --show-ends", "display $ at end of each line");
	program.option("-n, --number", "number all output lines");
	program.option("-s, --squeeze-blank", "supress repeated empty output lines");
	program.option("-t", "equivalent to -vT");
	program.option("-T, --show-tabs", "display TAB characters as ^I");
	program.option("-u", "(ignored)");
	program.option(
		"-v, --show-nonprinting",
		"use ^ and M- notation, except for LFD and TAB"
	);
	program.parse(process.argv);

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
		filenames: files,
		numberFlag: checkFlag("number"),
		numberNonblankFlag: checkFlag("numberNonblank"),
		showAllFlag: checkFlag("showAll"),
		showEndsFlag: checkFlag("showEnds"),
		showNonprintingFlag: checkFlag("showNonprinting"),
		showTabsFlag: checkFlag("showTabs"),
		squeezeBlankFlag: checkFlag("squeezeBlank"),
		stdin: stdinData
	} as ParsedArgs;
}
console.log(parseArgs());
