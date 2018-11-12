"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getMergedArrays_1 = require("./getMergedArrays");
var arrays_match_1 = require("@writetome51/arrays-match");
var arrays = [[1, 2], [3, 4], [5, 6], [7, 8], [9, [10]]];
var merged = getMergedArrays_1.getMergedArrays(arrays);
if (arrays_match_1.arraysMatch(merged, [1, 2, 3, 4, 5, 6, 7, 8, 9, [10]]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
arrays = [[], [], [5, 6], [7, 8], [9, [10]]];
merged = getMergedArrays_1.getMergedArrays(arrays);
if (arrays_match_1.arraysMatch(merged, [5, 6, 7, 8, 9, [10]]))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
