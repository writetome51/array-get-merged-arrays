"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");
// Returns all arrays inside 'arrays' combined into one array.
function getMergedArrays(arrays) {
    errorIfNotArray_1.errorIfNotArray(arrays);
    var emptyArray = [];
    return emptyArray.concat.apply(emptyArray, arrays);
}
exports.getMergedArrays = getMergedArrays;
