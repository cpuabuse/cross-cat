/*
	File: test/unit/pipeline/number-nonblank.ts
	cpuabuse.com
*/

/**
 * Tests `numberNonBlank`.
 */

import { strictEqual } from "assert";
import { processNumberNonBlank } from "../../../src/pipeline/number-nonblank";
import { food as input } from "../../input/pipeline";
import { food as expected } from "../../expected/pipeline";

// Test for multiple lines
export function testNumberNonBlank(): void {
	describe("number-nonblank", function() {
		it("should add numbers to the begining of the lines", function() {
			strictEqual(processNumberNonBlank(input), expected);
		});
	});
}

testNumberNonBlank();
