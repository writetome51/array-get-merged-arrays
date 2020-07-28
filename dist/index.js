import { errorIfNotArray } from 'error-if-not-array';
// Returns all arrays inside 'arrays' combined into one array.
export function getMergedArrays(arrays) {
    errorIfNotArray(arrays);
    return [].concat(...arrays);
}
