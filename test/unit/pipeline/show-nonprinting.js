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
        
        // Tab character
        describe("tab character", function(){
            it("should have expected value", function(){
                assert.strictEqual(showNonPrinting.showNonPrinting(inputData.tabCharacter), expected.tabCharacter)
            });
        });
        
        // Line feed character
        describe("line feed character", function(){
            it("should have expected value", function(){
                assert.strictEqual(showNonPrinting.showNonPrinting(inputData.lineFeedCharacter), expected.lineFeedCharacter)
            });
        });
        
        // Carriage return character
        describe("carriage return character", function(){
            it("should have expected value", function(){
                assert.strictEqual(showNonPrinting.showNonPrinting(inputData.carriageReturnCharacter), expected.carriageReturnCharacter)
            });
        });

        // Space character
        describe("space chatacter", function(){
            it("should have expected value",function(){
                assert.strictEqual(showNonPrinting.showNonPrinting(inputData.space),expected.space)
            });
        });   
        
        // Special characters between 33 and 126
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

        // Numbers
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

        // Letters
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
        
        // Del
        describe("DEL character", function(){
            it("should have expected value",function(){
                assert.strictEqual(showNonPrinting.showNonPrinting(inputData.del),expected.del)
            });
        });



        // Extended characters from 128 to 160
        describe("extendedCharacters",function(){
            it("should have expected amount of characters", function(){
                assert.strictEqual(showNonPrinting.showNonPrinting(inputData.getExtendedCharacters()), expected.extendedCharacters)
            });
        });

        // Unicode characters above 255
	    describe("unicode characters", function(){
		    it("should have expected values", function(){
			    assert.strictEqual(showNonPrinting.showNonPrinting(inputData.unicodeCharacter), expected.unicodeCharacter)
		    });
        });

        
        
        
	});

    // test for 127
    
    

	// 	Tests for 160 - 255
	// 	// Tests for other special characters.

	// 	// Tests for characters above 255.

	
}

testShowNonPrinting();

// module.exports = {
// 	testNonPrinting
// }
