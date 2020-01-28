/*
	File: src/test/unit/pipeline/show-tabs.ts
	cpuabuse.com
*/

import { strictEqual } from "assert";
const tab: string = "\t";
//@ts-ignore
import { tabCharacterForShowTabs } from "./../../../test/expected/pipeline.js";
import { processTabs } from "../../../src/pipeline/show-tabs";

function testShowTabs() {
	describe("tab character", function() {
		it("should have expected value", function() {
			strictEqual(tab, tabCharacterForShowTabs);
		});
	});
}

testShowTabs();
