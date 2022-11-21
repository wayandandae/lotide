const assertArraysEqual = require('../assertArraysEqual');

// TEST CASES
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,"3"],[1,2,3]); // type coercion, cannot distinguish between integer and string in console