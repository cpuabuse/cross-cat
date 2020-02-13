/*
	File: test/unit/pipeline/nonblank.ts
	cpuabuse.com
*/

/**
 * Tests `nonblank`.
 */

import { strictEqual } from "assert";
//@ts-ignore
import {  as input } from "../../input/pipeline.js";
//@ts-ignore
import {  as expected } from "../../expected/pipeline.js";
import { processNumberNonBlank } from "../../../src/pipeline/number-nonblank";

export function testnonblank(): void {
	describe("", function() {
		it("", function() {
			strictEqual(processNumberNonBlank(input), expected);
		});
	});
}

testnonblank();
