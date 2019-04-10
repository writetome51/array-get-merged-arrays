import { errorIfNotArray } from 'error-if-not-array';

// Returns all arrays inside 'arrays' combined into one array.

export function getMergedArrays(arrays): any[] {
	errorIfNotArray(arrays);
	let emptyArray = [];
	return emptyArray.concat(...arrays);
}
