const eqArrays = require('./eqArrays');

// compare two arrays and print out assertion message
const assertArraysEqual = function(arrayOne, arrayTwo) {
  // eqArrays either returns true or false
  eqArrays(arrayOne, arrayTwo) ?
    console.log(`😎 Assertion Passed: [${arrayOne}] is identical to [${arrayTwo}]`) : // true==pass message
    console.log(`🤯 Assertion Failed: [${arrayOne}] is NOT identical to [${arrayTwo}]`); // false==fail message
};



module.exports = assertArraysEqual;