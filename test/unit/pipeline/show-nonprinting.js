/*
	File: src/test/unit/pipeline/show-nonprinting.js
	cpuabuse.com
*/

const assert = require("assert");
const inputData = require("../../../test/input/pipeline.js");
const expected = require("../../../test/expected/pipeline.js");
const showNonPrinting = require("../../../src/pipeline/show-nonprinting.js");

function testShowNonPrinting() {
	describe("non-printing", function() {
		describe("specialCharacters", function() {
			// String length
			it("should have expected amount of characters", function() {
				assert.strictEqual(
					inputData.specialCharacters.length,
					expected.specialCharactersCount
				);
			});

			// Value
			it("should have expected value", function() {
				assert.strictEqual(
					showNonPrinting.showNonPrinting(inputData.specialCharacters),
					expected.specialCharacters
				);
			});
		});

		describe("numbers", function(){
			// String length
			it("should have expected amount of numbers", function(){
				assert.strictEqual(inputData.numbers.length, expected.numbersCount
				);
			});

			// Value
			it("should have expected value", function(){
				assert.strictEqual(showNonPrinting.showNonPrinting(inputData.numbers), expected.numbers
				);
			});
		});

		describe("letters", function(){
			// String length
			it("should have expected amount of letters", function(){
				assert.strictEqual(inputData.letters.length, expected.lettersCount);
			});
			
			// Value
			it("should have expected value", function(){
				assert.strictEqual(showNonPrinting.showNonPrinting(inputData.letters), expected.letters);
			});
        });
        
        describe("extendedCharacters",function(){
            // Value
            it("should have expected amount of characters", function(){
                assert.strictEqual(showNonPrinting.showNonPrinting(inputData.getExtendedCharacters()), expected.getExtendedCharacters())
            })

        } );
	});

	// 	tests for 0 - 32
	// 		// Tests for special characters.
	// 		verify input array lenght
	// 		// Tests for numbers.
	// 		verify input array lenght
	// 		// Tests for letters.
	// 		verify input array lenght

    // test for 127 - 160

	// 	Tests for 160 - 255
	// 	// Tests for other special characters.

	// 	// Tests for characters above 255.

	// 	tests for tabs

	// 	test for nEwline

	// 	tests fpr carriage return

	// 	tests for spaces
}

testShowNonPrinting();

// module.exports = {
// 	testNonPrinting
// }
