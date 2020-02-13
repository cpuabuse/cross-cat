/*
	File: test/system/system-test.ts
	cpuabuse.com
*/

/**
 * Performs a series of system tests.
 */
import { spawn, fork, exec } from "child_process";

/**
 * All of the system tests.
 */

export async function systemTest(): Promise<void> {
	await new Promise(function(resolve) {
		// Cat
		let cat = fork("src/cross-cat.js", ["test/system/data/system-data.txt"]);

		cat.stdout?.on("data", data => {
			console.log(data.toString());
		});
		cat.on("exit", function() {
			// resolve();
		});
	});
}
