/*
	File: test/unit/pipeline/squeezeBlank.ts
	cpuabuse.com
*/

/**
 * Tests `squeezeBlank`.
 */

import { insects as expected } from "../../expected/pipeline";
import { insects as input } from "../../input/pipeline";
import { processSqueezeBlank } from "../../../src/pipeline/squeeze-blank";
import { strictEqual } from "assert";

/**
 * Test for repeated empty lines.
 */
export function testsqueezeBlank(): void {
	describe("squeeze blank", function() {
		it("should squeeze repeated empty output lines", function() {
			strictEqual(processSqueezeBlank(input), expected);
		});
	});
}
