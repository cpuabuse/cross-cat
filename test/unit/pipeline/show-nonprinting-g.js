const showNonPrinting = require ("../../../src/pipeline/show-nonprinting")
var assert = require("assert");

// Space testing is to be moved with the numbers and special characters
const spaceInput = " "
const spaceExpected = " "

var unicodeCharacterInput = "ハローワールド";
var unicodeCharacterExpected = "M-^?M-^?M-^?M-^?M-^?M-^?M-^?";

var tabCharacterInput = "\t";
var tabCharacterExpected = "\t";

var lineFeedCharacterInput = "\cj";
var lineFeedCharacterExpected = "\cj";

var carraigeReturnCharacterInput = "\cm";
var carraigeReturnCharacterExpected = "\cm";

function testShowNonPrinting() {
	// Test for unicode character
	describe("unicode characters", function(){
		it("should have expected values", function(){
			assert.strictEqual(showNonPrinting.showNonPrinting(unicodeCharacterInput), unicodeCharacterExpected)
		});
	});
	describe("tab character", function(){
		it("should have expected value", function(){
			assert.strictEqual(showNonPrinting.showNonPrinting(tabCharacterInput), tabCharacterExpected)
		});
	});
	describe("line feed character", function(){
		it("should have expected value", function(){
			assert.strictEqual(showNonPrinting.showNonPrinting(lineFeedCharacterInput), lineFeedCharacterExpected)
		});
	});
	describe("carriage return character", function(){
		it("should have expected value", function(){
			assert.strictEqual(showNonPrinting.showNonPrinting(carraigeReturnCharacterInput), carraigeReturnCharacterExpected)
		});
	});
	describe("space chatacter", function(){
		it("should have expected value",function(){
			assert.strictEqual(showNonPrinting.showNonPrinting(spaceInput),spaceExpected)
		});
	});
}

testShowNonPrinting();