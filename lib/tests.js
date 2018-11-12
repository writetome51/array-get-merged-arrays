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
arrays = [['A'], ['B'], [5, 6], ['C', 'D'], [9, [10]]];
merged = getMergedArrays_1.getMergedArrays(arrays);
if (arrays_match_1.arraysMatch(merged, ['A', 'B', 5, 6, 'C', 'D', 9, [10]]))
    console.log('test 2A passed');
else
    console.log('test 2A FAILED');
// Test 3: Test the limit to how many arrays can be merged in one call:
arrays = [];
var i = -1;
while (++i < 120000) {
    arrays.push([i, i + 1, i, i + 1, i, i + 1, i, i + 1, i, i + 1, i, i + 1, i, i + 1]);
}
merged = getMergedArrays_1.getMergedArrays(arrays);
if (arrays[0][0] === merged[0])
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
