/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Tests `show-ends`.
 */

import { strictEqual } from "assert";
import { fruitList as inputFruitList } from "../../input/pipeline";
import { fruitList as expectedFruitList } from "../../expected/pipeline";
import { processEnds } from "../../../src/pipeline/show-ends";

/**
 * Tests for show ends.
 */
export function testShowEnds(): void {
	describe("fruitList", function() {
		it("should have ends replaced", function() {
			strictEqual(processEnds(inputFruitList), expectedFruitList);
		});
	});
}
