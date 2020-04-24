/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Tests `numberNonblank`.
 */

import { animals as expected } from "../../expected/pipeline";
import { animals as input } from "../../input/pipeline";
import { processNumberNonblank } from "../../../src/pipeline/number-nonblank";
import { strictEqual } from "assert";

/**
 * Test for multiple lines.
 */
export function testNumberNonblank(): void {
	describe("number-nonblank", function () {
		it("Number nonempty output lines, overrides -n", function () {
			strictEqual(processNumberNonblank(input), expected);
		});
	});
}
