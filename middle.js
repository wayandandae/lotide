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

// find middle item or items depending on the length of input array
const middle = function(array) {
  // create an array to hold middle items
  let finalArray = [];
  // create a variable to hold frequently used array length
  const count = array.length;
  // only push items if array length is longer than 2
  if (count > 2) {
    // check if array length is odd
    count % 2 === 1 ?
      // push single middle item if odd number of items
      finalArray.push(array[(count + 1) / 2 - 1]) :
      // push two middle items if even number
      finalArray.push(array[count / 2 - 1], array[count / 2]);
  }

  return finalArray;
};

// TEST CODE
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,null,"3",4,undefined]), ["3"]);