import { getMergedArrays } from './getMergedArrays';


let arrays = [[1,2], [3,4], [5,6], [7,8], [9, [10]]];

let merged = getMergedArrays(arrays);
console.log(merged);

// merged is now [1,2,3,4,5,6,7,8,9,[10]]


arrays = [[], [], [5,6], [7,8], [9, [10]]];

merged = getMergedArrays(arrays);
console.log(merged);

// merged is now [5,6,7,8,9,[10]]
