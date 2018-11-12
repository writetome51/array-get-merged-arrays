To include:

import {getMergedArrays} from '@writetome51/array-get-merged-arrays';

getMergedArrays(theArrays): any[]

Returns all arrays inside theArrays connected into one array:

let theArrays = [[1,2], [3,4], [5,6], [7,8]];  
let merged = getMergedArrays(theArrays);  
// merged is now [1,2,3,4,5,6,7,8]

It should be noted that the source array (theArrays, in this case) does not 
get modified.

NOTICE:  This function is tested to merge up to 120,000 arrays in one call.  
If you go higher than that, you may get a 'maximum call stack' error.