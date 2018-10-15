Returns all arrays inside theArrays concatenated into one array:

let theArrays = [[1,2], [3,4], [5,6], [7,8]];

let merged = getMergedArrays(theArrays);

merged is now [1,2,3,4,5,6,7,8]

It should be noted that the source array (theArrays, in this case) does not 
get modified.