/*
	File: test/system/system-test.ts
	cpuabuse.com
*/

/**
 * Performs a series of system tests.
 */
import { ChildProcessWithoutNullStreams, spawn } from "child_process";
import { ok, strictEqual } from "assert";
import { dinosaursShowTabs as expectedDinosaursShowTabs } from "../expected/index";
import { fruits as expectedFruits } from "../expected/index";
import { fruitsNumber as expectedFruitsNumber } from "../expected/index";
import { fruitsShowEnds as expectedFruitShowEnds } from "../expected/index";
import { vegetablesNumberNonBlank as expectedVegetablesNumberNonBlank } from "../expected/index";

/**
 * All of the system tests.
 */
export async function systemTest(args: Array<string>): Promise<string> {
	let text: string = "";
	await new Promise(function(resolve) {
		let cat: ChildProcessWithoutNullStreams = spawn("node", ["src/cross-cat.js", ...args], {
			stdio: ["pipe", "pipe", "pipe"]
		});

		cat.stdout.on("data", data => {
			text += data.toString();
		});

		cat.on("exit", function() {
			resolve();
		});
	});
	return text;
}

/**
 * Test for the CLI.
 */
export function sytemTestCat(): void {
	describe("Testing cross-cat functionality", function() {
		it("should return a non-empty help menu", function(done) {
			systemTest(["-h"]).then(function(text) {
				ok(text.length > 0);
				done();
			});
		});
		it("should return a non-empty version number", function(done) {
			systemTest(["-V"]).then(function(text) {
				ok(text.length > 0);
				done();
			});
		});
		describe("Testing with fruits.txt", function() {
			it("should return file contents", function(done) {
				systemTest(["test/data/fruits.txt"]).then(function(text) {
					strictEqual(text, expectedFruits);
					done();
				});
			});
			it("should return file contents with line mumbers", function(done) {
				systemTest(["test/data/fruits.txt", "-n"]).then(function(text) {
					strictEqual(text, expectedFruitsNumber);
					done();
				});
			});
			it("should return file contents with line endings", function(done) {
				systemTest(["test/data/fruits.txt", "-E"]).then(function(text) {
					strictEqual(text, expectedFruitShowEnds);
					done();
				});
			});
		});
		describe("Testing with vegetables.txt", function() {
			it("should return file contents with non-blank line numbers only", function(done) {
				systemTest(["test/data/vegetables.txt", "-b"]).then(function(text) {
					strictEqual(text, expectedVegetablesNumberNonBlank);
					done();
				});
			});
		});
		describe("Testing with dinosaurs.tsv", function() {
			it("should return file contents with tabs shown", function(done) {
				systemTest(["test/data/dinosaurs.tsv", "-T"]).then(function(text) {
					strictEqual(text, expectedDinosaursShowTabs);
					done();
				});
			});
		});
	});
}
