"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_array_1 = require("error-if-not-array");
// Returns all arrays inside 'arrays' combined into one array.
function getMergedArrays(arrays) {
    error_if_not_array_1.errorIfNotArray(arrays);
    var emptyArray = [];
    return emptyArray.concat.apply(emptyArray, arrays);
}
exports.getMergedArrays = getMergedArrays;
