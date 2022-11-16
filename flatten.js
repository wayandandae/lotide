// compare two arrays by comparing each element of arrays
const eqArrays = function(arrayOne, arrayTwo) {
  // iterate through every element of arrayOne
  for (let i = 0; i < arrayOne.length; i++) {
    // if an element of arrayTwo at the same position is different,
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  // return boolean true if code inside for-loop is not triggered
  return true;
};

// compare two arrays and print out assertion message
const assertArraysEqual = function(arrayOne, arrayTwo) {
  // eqArrays either returns true or false
  eqArrays(arrayOne, arrayTwo) ?
    console.log(`😎 Assertion Passed: [${arrayOne}] is identical to [${arrayTwo}]`) : // true==pass message
    console.log(`🤯 Assertion Failed: [${arrayOne}] is NOT identical to [${arrayTwo}]`); // false==fail message
};

// flatten nested array items by one level
const flatten = function(array) {
  // array variable to hold flattened array
  const flatArray = [];
  // iterate through every item of array
  for (let item of array) {
    // if an item in array is an array (nested array),
    (Array.isArray(item)) ?
      // each item within nested array will be pushed to flatArray
      item.forEach(nestItem => flatArray.push(nestItem)) :
      // if not an array, push as is
      flatArray.push(item);
  }
  return flatArray;
};

// TEST CASES
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, [[3, 4], 5], [6]])); // => [1, 2, [3, 4], 5, 6]
console.log(flatten([[], [2, [3, [4], 5], 6]])); // => [2, [3, [4], 5], 6]
// TEST CASE: use assertions
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // PASS
// these test cases return failure messages as strict comparison (===) cannot be executed on arrays
// triple or more nested arrays are not acceptable for eqArrays function
assertArraysEqual(flatten([1, 2, [[3, 4], 5], [6]]), [1, 2, [3, 4], 5, 6]);
assertArraysEqual(flatten([[], [2, [3, [4], 5], 6]]), [2, [3, [4], 5], 6]);