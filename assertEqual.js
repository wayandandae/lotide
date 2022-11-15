// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // if first and second parameters are strictly identical,
  if (actual === expected) {
    console.log(`😎😎 Assertion Passed: ${actual} === ${expected}`);
    // if first and second parameters are unidentical,
  } else {
    console.log(`🤯🤯 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// unidentical strings
assertEqual("Lighthouse Labs", "Bootcamp");
// identical numbers
assertEqual(1, 1);
// identical strings
assertEqual("Good", "Good");
// unidentical numbers
assertEqual(3, 5);