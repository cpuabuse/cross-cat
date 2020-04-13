/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
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
