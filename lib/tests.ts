import { getMergedArrays } from './getMergedArrays';
import { arraysMatch } from '@writetome51/arrays-match';


let arrays = [[1, 2], [3, 4], [5, 6], [7, 8], [9, [10]]];

let merged = getMergedArrays(arrays);
if (arraysMatch(merged, [1, 2, 3, 4, 5, 6, 7, 8, 9, [10]])) console.log('test 1 passed');
else console.log('test 1 FAILED');


arrays = [[], [], [5, 6], [7, 8], [9, [10]]];

merged = getMergedArrays(arrays);
if (arraysMatch(merged, [5, 6, 7, 8, 9, [10]])) console.log('test 2 passed');
else console.log('test 2 FAILED');

