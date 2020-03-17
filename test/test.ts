/*
	File: test/test.ts
	cpuabuse.com
*/

/**
 * Performs tests.
 */

import { sytemTestCat } from "./system/systemTest";
import { unitTest } from "./unit/test";

// Unit test
unitTest();

// System test
sytemTestCat();
