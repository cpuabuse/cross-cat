/*
	File: test/unit/pipeline/show-nonprinting.js
	cpuabuse.com
*/

/**
 * Tests `showNonprinting`.
 */

import { strictEqual } from "assert";
import {
	tabCharacter as inputTabCharacter,
	lineFeedCharacter as inputlineFeedCharacter,
	carriageReturnCharacter as inputCarriageReturnCharacter,
	space as inputSpace,
	specialCharacters as inputSpecialCharacters,
	numbers as inputNumbers,
	letters as inputLetters,
	del as inputDel,
	getExtendedLower as getInputExtendedLower,
	extendedHigher as inputExtendedHigher,
	unicodeCharacter as inputUnicodeCharacter
} from "../../input/pipeline";
import {
	tabCharacter as expectedTabCharacter,
	lineFeedCharacter as expectedLineFeedCharacter,
	carriageReturnCharacter as expectedCarriageReturnCharacter,
	space as expectedSpace,
	specialCharactersCount as expectedSpecialCharactersCount,
	specialCharacters as expectedSpecialCharacters,
	numbers as expectedNumbers,
	numbersCount as expectedNumbersCount,
	letters as expectedLetters,
	lettersCount as expectedLettersCount,
	del as expectedDel,
	extendedCharacters as expectedExtendedCharacters,
	extendedHigher as expectedExtendedHigher,
	unicodeCharacter as expectedUnicodeCharacter
} from "../../expected/pipeline";
import { showNonPrinting } from "../../../src/pipeline/show-nonprinting";

/**
 * Multiple tests for show non printing.
 */
export function testShowNonPrinting() {
	describe("non-printing", function() {
		// Tab character
		describe("tab character", function() {
			it("should have expected value", function() {
				strictEqual(showNonPrinting(inputTabCharacter), expectedTabCharacter);
			});
		});

		// Line feed character
		describe("line feed character", function() {
			it("should have expected value", function() {
				strictEqual(showNonPrinting(inputlineFeedCharacter), expectedLineFeedCharacter);
			});
		});

		// Carriage return character
		describe("carriage return character", function() {
			it("should have expected value", function() {
				strictEqual(showNonPrinting(inputCarriageReturnCharacter), expectedCarriageReturnCharacter);
			});
		});

		// Space character
		describe("space chatacter", function() {
			it("should have expected value", function() {
				strictEqual(showNonPrinting(inputSpace), expectedSpace);
			});
		});

		// Special characters between 33 and 126
		describe("specialCharacters", function() {
			// String length
			it("should have expected amount of characters", function() {
				strictEqual(inputSpecialCharacters.length, expectedSpecialCharactersCount);
			});

			// Value
			it("should have expected value", function() {
				strictEqual(showNonPrinting(inputSpecialCharacters), expectedSpecialCharacters);
			});
		});

		// Numbers
		describe("numbers", function() {
			// String length
			it("should have expected amount of numbers", function() {
				strictEqual(inputNumbers.length, expectedNumbersCount);
			});

			// Value
			it("should have expected value", function() {
				strictEqual(showNonPrinting(inputNumbers), expectedNumbers);
			});
		});

		// Letters
		describe("letters", function() {
			// String length
			it("should have expected amount of letters", function() {
				strictEqual(inputLetters.length, expectedLettersCount);
			});

			// Value
			it("should have expected value", function() {
				strictEqual(showNonPrinting(inputLetters), expectedLetters);
			});
		});

		// Del
		describe("DEL character", function() {
			it("should have expected value", function() {
				strictEqual(showNonPrinting(inputDel), expectedDel);
			});
		});

		// Extended characters from 128 to 160
		describe("extendedCharacters", function() {
			it("should have expected amount of characters", function() {
				strictEqual(showNonPrinting(getInputExtendedLower()), expectedExtendedCharacters);
			});
		});

		// Extended characters from 160 to 255
		describe("othersExtendedCharacters", function() {
			it("should have expected amount of characters", function() {
				strictEqual(showNonPrinting(inputExtendedHigher), expectedExtendedHigher);
			});
		});

		// Unicode characters above 255
		describe("unicode characters", function() {
			it("should have expected values", function() {
				strictEqual(showNonPrinting(inputUnicodeCharacter), expectedUnicodeCharacter);
			});
		});
	});
}
