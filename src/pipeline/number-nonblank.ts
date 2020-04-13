/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Processes nonblank.
 */

import { number } from "./auxiliary/number";

/**
 * Number nonempty output lines, overrides -n.
 * @param text Text to process
 */
export function processNumberNonBlank(text: string): string {
	return number(text, false);
}
