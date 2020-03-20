/*
	File: src/pipeline/number.ts
	cpuabuse.com
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
