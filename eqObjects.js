// check if two parameters are strictly identical
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

// TEST CASE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false