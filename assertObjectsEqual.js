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

// compare two objects by comparing keys and values
const eqObjects = function(object1, object2) {
  // if the number of keys in object1 and object2 differ return false
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  // iterate through every key of object1
  for (const key of Object.keys(object1)) {
    // if key value is an array,
    if (Array.isArray(object1[key])) {
      // but if corresponding arrays are not identical return false
      if (!eqArrays(object1[key], object2[key])) return false;
      // if key value is not an array,
    } else {
      // if the key values of object1 and object2 differ return false
      if (object1[key] !== object2[key]) return false;
    }
  }
  // return true if all the above cases did not apply
  return true;
};

// print out console log messages of objects comparison result
const assertObjectsEqual = function(actual, expected) {
  // import util library and use it to display the contents of objects in console
  const inspect = require("util").inspect;
  // use eqObjects to compare actual and expected objects
  eqObjects(actual, expected) ?
    console.log(`😎 Assertion Passed: ${inspect(actual)} is identical to ${inspect(expected)}`) : // true==pass message
    console.log(`🤯 Assertion Failed: ${inspect(actual)} is NOT identical to ${inspect(expected)}`); // false==fail message
};

// TEST CASE
assertObjectsEqual({a: 1, b: 2, c: [3, 4, 5]}, {b: 2, c: [3, 4, 5], a: 1});
assertObjectsEqual({a: 1, b: [2, 3]}, {a: [2, 3], b: [2, 3]});