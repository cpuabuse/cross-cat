/*
	File: test/unit/unit-test.ts
	cpuabuse.com
*/

/**
 * Performs a series of unit tests.
 */

//@ts-ignore
import { testShowNonPrinting } from "./pipeline/show-nonprinting.js";
import { testShowTabs } from "./pipeline/show-tabs";

/**
 * All of the unit tests.
 */
export function unitTest(): void {
	// showNonpriting
	testShowNonPrinting();

	// showTabs
	testShowTabs();
}
