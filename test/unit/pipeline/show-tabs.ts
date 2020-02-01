/*
	File: src/test/unit/pipeline/show-tabs.ts
	cpuabuse.com
*/

import { strictEqual } from "assert";
//@ts-ignore
import { tabCharacter } from "../../input/pipeline.js";
//@ts-ignore
import { tabCharacterForShowTabs as expected } from "../../expected/pipeline.js";
import { processTabs } from "../../../src/pipeline/show-tabs";

function testShowTabs() {
	describe("tab character", function() {
		it("should have expected value", function() {
			strictEqual(processTabs(tabCharacter), expected);
		});
	});
}

testShowTabs();
