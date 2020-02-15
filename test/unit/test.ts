/*
	File: test/unit/unit-test.ts
	cpuabuse.com
*/

/**
 * Performs a series of unit tests.
 */

import { testShowNonPrinting } from "./pipeline/show-nonprinting";
import { testShowTabs } from "./pipeline/show-tabs";
import { testShowEnds } from "./pipeline/show-ends";

/**
 * All of the unit tests.
 */
export function unitTest(): void {
	// showNonpriting
	testShowNonPrinting();

	// showTabs
	testShowTabs();

	// showEnds
	testShowEnds();
}
