// custom assert function to strictly compare two parameters
const assertEqual = function(actual, expected) {
  // if first and second parameters are strictly identical,
  if (actual === expected) {
    console.log(`😎😎 Assertion Passed: ${actual} === ${expected}`);
    // if first and second parameters are unidentical,
  } else {
    console.log(`🤯🤯 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// TEST CASES
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,"3"],[1,2,3]); // type coercion, cannot distinguish between integer and string in console