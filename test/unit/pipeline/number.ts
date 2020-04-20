/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Tests `number`.
 */

import { food as expected } from "../../expected/pipeline";
import { food as input } from "../../input/pipeline";
import { processNumber } from "../../../src/pipeline/number";
import { strictEqual } from "assert";

/**
 * Test for multiple lines.
 */
export function testNumber(): void {
	describe("number", function () {
		it("should add numbers to the begining of the lines", function () {
			strictEqual(processNumber(input), expected);
		});
	});
}
