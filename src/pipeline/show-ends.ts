/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Processes ends of lines.
 */

/**
 * Put $ at the end of each line.
 * @param text Text to process
 */
export function processEnds(text: string): string {
	return `${text.split("\n").join("$\n")}$`.split("\r$\n").join("$\r\n");
}
