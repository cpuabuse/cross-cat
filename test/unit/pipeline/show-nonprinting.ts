/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
*/

/**
 * Tests `showNonprinting`.
 */
import {
	carriageReturnCharacter as expectedCarriageReturnCharacter,
	del as expectedDel,
	extendedCharacters as expectedExtendedCharacters,
	extendedHigher as expectedExtendedHigher,
	letters as expectedLetters,
	lettersCount as expectedLettersCount,
	lineFeedCharacter as expectedLineFeedCharacter,
	numbers as expectedNumbers,
	numbersCount as expectedNumbersCount,
	space as expectedSpace,
	specialCharacters as expectedSpecialCharacters,
	specialCharactersCount as expectedSpecialCharactersCount,
	tabCharacter as expectedTabCharacter,
	unicodeCharacter as expectedUnicodeCharacter
} from "../../expected/pipeline";
import {
	getExtendedLower as getInputExtendedLower,
	carriageReturnCharacter as inputCarriageReturnCharacter,
	del as inputDel,
	extendedHigher as inputExtendedHigher,
	letters as inputLetters,
	numbers as inputNumbers,
	space as inputSpace,
	specialCharacters as inputSpecialCharacters,
	tabCharacter as inputTabCharacter,
	unicodeCharacter as inputUnicodeCharacter,
	lineFeedCharacter as inputlineFeedCharacter
} from "../../input/pipeline";

import { showNonPrinting } from "../../../src/pipeline/show-nonprinting";
import { strictEqual } from "assert";

/**
 * Multiple tests for show non printing.
 */
export function testShowNonPrinting(): void {
	describe("non-printing", function () {
		// Tab character
		describe("tab character", function () {
			it("should have expected value", function () {
				strictEqual(showNonPrinting(inputTabCharacter), expectedTabCharacter);
			});
		});

		// Line feed character
		describe("line feed character", function () {
			it("should have expected value", function () {
				strictEqual(showNonPrinting(inputlineFeedCharacter), expectedLineFeedCharacter);
			});
		});

		// Carriage return character
		describe("carriage return character", function () {
			it("should have expected value", function () {
				strictEqual(showNonPrinting(inputCarriageReturnCharacter), expectedCarriageReturnCharacter);
			});
		});

		// Space character
		describe("space chatacter", function () {
			it("should have expected value", function () {
				strictEqual(showNonPrinting(inputSpace), expectedSpace);
			});
		});

		// Special characters between 33 and 126
		describe("specialCharacters", function () {
			// String length
			it("should have expected amount of characters", function () {
				strictEqual(inputSpecialCharacters.length, expectedSpecialCharactersCount);
			});

			// Value
			it("should have expected value", function () {
				strictEqual(showNonPrinting(inputSpecialCharacters), expectedSpecialCharacters);
			});
		});

		// Numbers
		describe("numbers", function () {
			// String length
			it("should have expected amount of numbers", function () {
				strictEqual(inputNumbers.length, expectedNumbersCount);
			});

			// Value
			it("should have expected value", function () {
				strictEqual(showNonPrinting(inputNumbers), expectedNumbers);
			});
		});

		// Letters
		describe("letters", function () {
			// String length
			it("should have expected amount of letters", function () {
				strictEqual(inputLetters.length, expectedLettersCount);
			});

			// Value
			it("should have expected value", function () {
				strictEqual(showNonPrinting(inputLetters), expectedLetters);
			});
		});

		// Del
		describe("DEL character", function () {
			it("should have expected value", function () {
				strictEqual(showNonPrinting(inputDel), expectedDel);
			});
		});

		// Extended characters from 128 to 160
		describe("extendedCharacters", function () {
			it("should have expected amount of characters", function () {
				strictEqual(showNonPrinting(getInputExtendedLower()), expectedExtendedCharacters);
			});
		});

		// Extended characters from 160 to 255
		describe("othersExtendedCharacters", function () {
			it("should have expected amount of characters", function () {
				strictEqual(showNonPrinting(inputExtendedHigher), expectedExtendedHigher);
			});
		});

		// Unicode characters above 255
		describe("unicode characters", function () {
			it("should have expected values", function () {
				strictEqual(showNonPrinting(inputUnicodeCharacter), expectedUnicodeCharacter);
			});
		});
	});
}
