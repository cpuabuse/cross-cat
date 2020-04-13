/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Performs a series of unit tests.
 */

import { testNumber } from "./pipeline/number";
import { testNumberNonBlank } from "./pipeline/number-nonblank";
import { testShowEnds } from "./pipeline/show-ends";
import { testShowNonPrinting } from "./pipeline/show-nonprinting";
import { testShowTabs } from "./pipeline/show-tabs";
import { testsqueezeBlank } from "./pipeline/squeezeBlank";

/**
 * All of the unit tests.
 */
export function unitTest(): void {
	// number
	testNumber();

	// numberNonBlank
	testNumberNonBlank();

	// showNonpriting
	testShowNonPrinting();

	// showTabs
	testShowTabs();

	// showEnds
	testShowEnds();

	// squeezeBlank
	testsqueezeBlank();
}
