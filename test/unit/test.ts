/*
	File: test/unit/unit-test.ts
	cpuabuse.com
*/

/**
 * Performs a series of unit tests.
 */

import { testShowEnds } from "./pipeline/show-ends";
import { testShowNonPrinting } from "./pipeline/show-nonprinting";
import { testShowTabs } from "./pipeline/show-tabs";
import { testsqueezeBlank } from "./pipeline/squeezeBlank";

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

	// squeezeBlank
	testsqueezeBlank();
}
