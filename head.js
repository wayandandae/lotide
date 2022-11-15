// same function from assertEqual.js
const assertEqual = function(actual, expected) {
  // if first and second parameters are strictly identical,
  if (actual === expected) {
    console.log(`😎😎 Assertion Passed: ${actual} === ${expected}`);
    // if first and second parameters are unidentical,
  } else {
    console.log(`🤯🤯 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  // return first element of array
  return array[0];
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// array of single item
assertEqual(head([5]), 5);
// emptry array
assertEqual(head([]), "Hello");