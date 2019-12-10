/*
	File: src/pipeline/show-tabs.ts
	cpuabuse.com
*/

/**
 * Replace TAB characters description.
 */

export function processTabs(text: string): string {
	return text.split("\t").join("^I");
}
