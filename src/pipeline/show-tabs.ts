/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Replace TAB characters description.
 */

/**
 * Display TAB characters as `^I`.
 * @param text Text to process
 */
export function processTabs(text: string): string {
	return text.split("\t").join("^I");
}
