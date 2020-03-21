/*
	File: test/unit/pipeline/number.ts
	cpuabuse.com
*/

/**
 * Tests `number`.
 */

import { strictEqual } from "assert";
import { processNumber } from "../../../src/pipeline/number";
import { food as input } from "../../input/pipeline";
import { food as expected } from "../../expected/pipeline";

/**
 * Test for multiple lines.
 */
export function testNumber(): void {
	describe("number", function() {
		it("should add numbers to the begining of the lines", function() {
			strictEqual(processNumber(input), expected);
		});
	});
}
