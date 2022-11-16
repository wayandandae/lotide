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

// count how many true items in second parameter are found in first
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // create a variable to hold the resulting object
  const results = {};
  // iterate through every element of allItems
  for (const item of allItems) {
    // if corresponding key-value of itemsToCount is strictly true,
    if (itemsToCount[item] === true) {
      // if the key already exists in results object,
      if (results[item]) {
        // accumulate by 1 count
        results[item]++;
        // if the key does not exist,
      } else {
        // create a starting count as 1
        results[item] = 1;
      }
    }
  }
  // return resulting object that holds keys and values
  return results;
};

// TEST CASE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);