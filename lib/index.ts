import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';

// Returns all arrays inside 'arrays' combined into one array.

export function getMergedArrays(arrays): any[] {
	errorIfNotArray(arrays);
	let emptyArray = [];
	return emptyArray.concat(...arrays);
}
