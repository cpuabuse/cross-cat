/*
	File: test/unit/pipeline/squeezeBlank.ts
	cpuabuse.com
*/

/**
 * Tests `squeezeBlank`.
 */

// @ts-ignore
import { insects as expected } from "../../expected/pipeline";
// @ts-ignore
import { insects as input } from "../../input/pipeline";
import { processSqueezeBlank } from "../../../src/pipeline/squeeze-blank";
import { strictEqual } from "assert";

// Test for repeated empty lines
export function testsqueezeBlank(): void {
	describe("squeeze blank", function() {
		it("should squeeze repeated empty output lines", function() {
			strictEqual(processSqueezeBlank(input), expected);
		});
	});
}
