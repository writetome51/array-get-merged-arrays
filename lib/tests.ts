import { getMergedArrays } from './getMergedArrays';
import { arraysMatch } from '@writetome51/arrays-match';


let arrays: any[] = [[1, 2], [3, 4], [5, 6], [7, 8], [9, [10]]];

let merged = getMergedArrays(arrays);
if (arraysMatch(merged, [1, 2, 3, 4, 5, 6, 7, 8, 9, [10]])) console.log('test 1 passed');
else console.log('test 1 FAILED');


arrays = [[], [], [5, 6], [7, 8], [9, [10]]];

merged = getMergedArrays(arrays);
if (arraysMatch(merged, [5, 6, 7, 8, 9, [10]])) console.log('test 2 passed');
else console.log('test 2 FAILED');


arrays = [['A'], ['B'], [5, 6], ['C', 'D'], [9, [10]]];

merged = getMergedArrays(arrays);
if (arraysMatch(merged, ['A', 'B', 5, 6, 'C', 'D', 9, [10]])) console.log('test 2A passed');
else console.log('test 2A FAILED');


// Test 3: Test the limit to how many arrays can be merged in one call:
arrays = [];
let i = -1;
while (++i < 120000) {
	arrays.push([i, i + 1, i, i + 1, i, i + 1, i, i + 1, i, i + 1, i, i + 1, i, i + 1]);
}
merged = getMergedArrays(arrays);
if (arrays[0][0] === merged[0]) console.log('test 3 passed');
else console.log('test 3 FAILED');