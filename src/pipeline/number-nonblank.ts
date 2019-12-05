/*
	File: src/pipeline/number.ts
	cpuabuse.com
*/

import { number } from "./auxiliary/number";

/**
 * Adds numbers to the begining of the line.
 * @param text Text to process
 */
export function processNumberNonBlank(text: string): string {
	return number(text, false);
}
