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

// find the occurrence of letters and output positions as array
const letterPositions = function(sentence) {
  // variable to hold resulting object of letter positions
  const results = {};
  // variable to hold an array of setence split into letters
  const sArray = sentence.split("");
  // iterate through every letter of sentence
  for (let i = 0; i < sArray.length; i++) {
    // if there was a previous occurrence of the letter,
    if (results[sArray[i]]) {
      // push to the existing array
      results[sArray[i]].push(i);
      // if it is the first occurrence,
    } else {
      // create a new array with its index as first element
      results[sArray[i]] = [i];
    }
  }
  // remove unnecessary space property
  delete results[" "];
  return results;
};

// TEST CASE
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);