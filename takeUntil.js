// compare two arrays by comparing each element of arrays
const eqArrays = function(arrayOne, arrayTwo) {
  // check if the lengths of two arrays are same
  if (arrayOne.length !== arrayTwo.length) return false;
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

// add items of array until callback condition is fulfilled
const takeUntil = (array, callback) => {
  // create an array to hold result array
  const result = [];
  // iterate through every element of array
  for (const element of array) {
    // if the condition of callback function is met break out of loop and return result
    if (callback(element)) return result;
    // keep pushing element to result array when callback function is false
    else result.push(element);
  }

  return result;
};

// TEST CASE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

const data3 = ["a", "b", "k", "j", "h", "A", "x", "x", "z"];
const results3 = takeUntil(data3, x => x > "q");

assertArraysEqual(results1,[1, 2, 5, 7, 2]);
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);
assertArraysEqual(results3,["a", "b", "k", "j", "h", "A"]);