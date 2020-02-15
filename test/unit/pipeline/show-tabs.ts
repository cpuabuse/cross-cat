/*
	File: test/unit/pipeline/show-tabs.ts
	cpuabuse.com
*/

/**
 * Tests `showTabs`.
 */

import { strictEqual } from "assert";
import { fruitTable as input } from "../../input/pipeline";
import { fruitTable as expected } from "../../expected/pipeline";
import { processTabs } from "../../../src/pipeline/show-tabs";

export function testShowTabs(): void {
	describe("Fruit table TSV string", function() {
		it("should have tabs replaced", function() {
			strictEqual(processTabs(input), expected);
		});
	});
}

testShowTabs();
