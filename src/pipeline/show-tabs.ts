/*
	File: src/pipeline/show-tabs.ts
	cpuabuse.com
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
