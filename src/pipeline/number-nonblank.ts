/*
	File: src/pipeline/number-nonblank.ts
	cpuabuse.com
*/

import { number } from "./auxiliary/number";

/**
 * Number nonempty output lines, overrides -n.
 * @param text Text to process
 */
export function processNumberNonBlank(text: string): string {
	return number(text, false);
}
