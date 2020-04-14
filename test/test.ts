/*
	Copyright 2020 cpuabuse.com
	Licensed under the ISC License (https://opensource.org/licenses/ISC)
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
