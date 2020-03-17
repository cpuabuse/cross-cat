/*
	File: test/test.ts
	cpuabuse.com
*/

/**
 * Performs tests.
 */

import { sytemTest } from "./system/test";
import { unitTest } from "./unit/test";

// Unit test
unitTest();

// System test
sytemTest();
