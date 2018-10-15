"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getMergedArrays_1 = require("./getMergedArrays");
var arrays = [[1, 2], [3, 4], [5, 6], [7, 8], [9, [10]]];
var merged = getMergedArrays_1.getMergedArrays(arrays);
console.log(merged);
// merged is now [1,2,3,4,5,6,7,8,9,[10]]
arrays = [[], [], [5, 6], [7, 8], [9, [10]]];
merged = getMergedArrays_1.getMergedArrays(arrays);
console.log(merged);
// merged is now [5,6,7,8,9,[10]]
