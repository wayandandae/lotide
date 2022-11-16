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

// count letters present in string
const countLetters = function(string) {
  // variable to hold resulting object
  const results = {};
  // iterate through every letter of string
  for (const letter of string) {
    // if the letter already exists in results object
    if (results[letter]) {
      // accumulate by 1
      results[letter]++;
      // if a new letter is introduced
    } else {
      // set the starting number to be 1
      results[letter] = 1;
    }
  }
  return results;
};

// TEST CASE
assertEqual(countLetters("LhLlIgHtHoUsElAbS").L, 2);
assertEqual(countLetters("LhLlIgHtHoUsElAbS").l, 2);
// dot notation does not work with numbers
assertEqual(countLetters("1ONE2TWO3THREE")["2"], 1);