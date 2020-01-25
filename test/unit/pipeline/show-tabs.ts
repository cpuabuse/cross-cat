/*
	File: src/test/unit/pipeline/show-tabs.ts
	cpuabuse.com
*/

import { assert } from "assert";
import {inputData} from "../../../test/input/pipeline.js"
import {expected} from "../../../test/expected/pipeline.js"
import {showTabs} from "../../../src/pipeline/show-tabs.js"

function testShowTabs() {
    describe("tab character", function(){
        it("should have expected value", function(){
            assert.strictEqual(showTabs.processTabs(inputData.tabCharacter), expected.tabCharacter)
        });
    });
}