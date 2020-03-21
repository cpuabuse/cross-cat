/*
	File: test/unit/pipeline/number-nonblank.ts
	cpuabuse.com
*/

/**
 * Tests `numberNonBlank`.
 */

import { strictEqual } from "assert";
import { processNumberNonBlank } from "../../../src/pipeline/number-nonblank";
import { animals as input } from "../../input/pipeline";
import { animals as expected } from "../../expected/pipeline";

/**
 * Test for multiple lines.
 */
export function testNumberNonBlank(): void {
	describe("number-nonblank", function() {
		it("Number nonempty output lines, overrides -n", function() {
			strictEqual(processNumberNonBlank(input), expected);
		});
	});
}
