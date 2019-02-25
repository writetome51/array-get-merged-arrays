# getMergedArrays(theArrays): any[]

Returns all arrays inside `theArrays` connected into one array.  
The source array ( `theArrays` ) does not get modified.

NOTICE:  This function is tested to merge up to 120,000 arrays in one call.  
If you go higher than that, you may get a 'maximum call stack' error.

## Examples
```
let theArrays = [ [1,2], [3,4], [5,6], [7,8] ];  
let merged = getMergedArrays(theArrays);  
// merged is now [1,2,3,4,5,6,7,8]

// It does not flatten deeply nested arrays:
let theArrays = [ [1,2], [ [3,4], [5,6] ], [7,8] ];  
let merged = getMergedArrays(theArrays);  
// merged is now [1, 2, [3,4], [5,6], 7, 8]
```

## Installation
`npm i  @writetome51/array-get-merged-arrays`

## Loading
```
// if using Typescript:
import {getMergedArrays} from '@writetome51/array-get-merged-arrays';
// if using ES5 Javascript:
var getMergedArrays = require('@writetome51/array-get-merged-arrays').getMergedArrays;
```