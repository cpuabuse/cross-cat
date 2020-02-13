/*
	File: test/unit/pipeline/show-ends.ts
	cpuabuse.com
*/

/**
 * Tests `show-ends`.
 */

import { strictEqual } from "assert";
//@ts-ignore
import { fruitList as inputFruitList } from "../../input/pipeline.js";
//@ts-ignore
import { fruitList as expectedFruitList } from "../../expected/pipeline.js";
import { processEnds } from "../../../src/pipeline/show-ends";

export function testShowEnds(): void {
	describe("Fruit list test", function() {
		it("should have ends replaced", function() {
			strictEqual(processEnds(inputFruitList), expectedFruitList);
		});
	});
}
