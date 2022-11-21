const eqArrays = require('./eqArrays');

// compare two arrays and print out assertion message
const assertArraysEqual = (arrayOne, arrayTwo) =>
  eqArrays(arrayOne, arrayTwo) ?
    // if arrayOne and arrayTwo return true for equal arrays test,
    console.log(`😎 Assertion Passed: [${arrayOne}] === [${arrayTwo}]`) :
    // if not,
    console.log(`🤯 Assertion Failed: [${arrayOne}] !== [${arrayTwo}]`);


module.exports = assertArraysEqual;