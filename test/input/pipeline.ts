/*
	File: test/input/pipeline.ts
	cpuabuse.com
*/

/**
 * Provide the input data.
 */

/**
 * Carriage return.
 */
export const carriageReturnCharacter: string = "\r";

/**
 * Delete.
 */
export const del: string = "^?";

/**
 * List of food.
 */
export const food: string = `Beef
Sugar cane
Beans`;

/**
 * List of animals with empty lines for number-nonblank test.
 */
export const animals: string = `Dog

Cat

Snake`;

/**
 * Literal empty string.
 */
export const emptyString: string = "";

/**
 * Characters between 160 and 255; but tested manually from 170 to 172.
 */
export const extendedHigher: string = "ª«¬";

/**
 * All of the letters, lower case and upper case.
 */
export const letters: string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Line feed character.
 */
export const lineFeedCharacter: string = "\n";

/**
 * Numbers.
 */
export const numbers: string = "0123456789";

/**
 * Insects separeted by several blank lines for squeeze-blank test.
 */
export const insects: string = `Grasshoper



Praying Mantis
`;

/**
 * TSV string to test `processTabs` function.
 */
export const fruitTable: string = `Name	Weight	Color
Orange	200	Orange
Apple	250	Red`;

/**
 * List to test `processEnds` function.
 */
export const fruitList: string = `Apple
Orange`;

/**
 * Literal space.
 */
export const space: string = " ";

/**
 * Special characters from 33 to 126.
 */
export const specialCharacters: string = "!\"#$%&'()*+,-./:;>=<?@[\\]^_`{|}~";

/**
 * Tab.
 */
export const tabCharacter: string = "\t";

/**
 * It is a string that means `Hello, World!` in Japanese.
 */
export const unicodeCharacter: string = "ハローワールド";

/**
 * Extended characters from 128 to 130.
 */
export function getExtendedLower(): string {
	// An array of characters to return as a string
	let array: string[] = new Array();

	// Minimum character number that function returns in the string
	let extendedLowerMin: number = 128;

	// Maximum character number that function returns in the string
	let extendedLowerMax: number = 130;

	// Testing the 2 first characters
	for (let i: number = extendedLowerMin; i < extendedLowerMax; i++) {
		array.push(String.fromCharCode(i));
	}
	return array.join(emptyString);
}
