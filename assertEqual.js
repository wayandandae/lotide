// compare two arguments strictly, types must match
const assertEqual = (actual, expected) =>
  actual === expected ?
    // if first and second arguments are strictly identical,
    console.log(`😎😎 Assertion Passed: ${actual} === ${expected}`) :
    // if first and second arguments are not identical,
    console.log(`🤯🤯 Assertion Failed: ${actual} !== ${expected}`);


module.exports = assertEqual;