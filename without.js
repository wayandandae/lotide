// compare two arrays by comparing each element of arrays
const eqArrays = function(arrayOne, arrayTwo) {
  // check if the lengths of two arrays are same
  if (arrayOne.length !== arrayTwo.length) return false;
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

// remove elements of itemsToRemove array from source array
const without = function(source, itemsToRemove) {
  // create an array to hold the remaining items
  const finalArray = [];
  // iterate through every element of source
  for (let item of source) {
    // if an element of source array is not found in itemsToRemove array,
    // the element is safe to be added to finalArray
    if (itemsToRemove.indexOf(item) === -1) finalArray.push(item);
  }
  // return only safe elements
  return finalArray;
};

// TEST CASES
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["a", "bc", "d"], ["a", "b", 3])); // => ["bc", "d"]
console.log(without([0, "2", "3"], [false, 2, "3"])); // => [0, "2"]
// TEST CASE: check if original array is mutated
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);