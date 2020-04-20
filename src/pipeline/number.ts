/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Processes number.
 */

import { number } from "./auxiliary/number";

/**
 * Adds numbers to the begining of the line.
 * @param text Text to process
 */
export function processNumber(text: string): string {
	return number(text, true);
}
