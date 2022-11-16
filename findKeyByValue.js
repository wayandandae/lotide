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

// find key that matches value in object
// used general variables for various usage
const findKeyByValue = function(object, value) {
  // iterate through every property of object
  for (const property in object) {
    // if the property value of object is the same as value return property
    // function will return undefined if no matching value is found
    if (object[property] === value) return property;
  }
};

// TEST CASE
const bestTVShowsByGenre = {
  "sci_fi": "The Expanse", // eslint
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);