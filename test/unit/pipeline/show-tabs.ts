/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Tests `showTabs`.
 */

import { strictEqual } from "assert";
import { fruitTable as input } from "../../input/pipeline";
import { fruitTable as expected } from "../../expected/pipeline";
import { processTabs } from "../../../src/pipeline/show-tabs";

/**
 * Test for show tabs.
 */
export function testShowTabs(): void {
	describe("Fruit table TSV string", function() {
		it("should have tabs replaced", function() {
			strictEqual(processTabs(input), expected);
		});
	});
}
