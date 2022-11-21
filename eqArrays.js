// compare two arrays by comparing each element of arrays
const eqArrays = (arrayOne, arrayTwo) => {
  // check if the lengths of two arrays are same
  if (arrayOne.length !== arrayTwo.length) return false;
  // iterate through every element of arrayOne
  for (let i = 0; i < arrayOne.length; i++) {
    // if an element of arrayTwo at same index is different,
    if (arrayOne[i] !== arrayTwo[i]) return false;
  }
  // return boolean true if code inside for-loop is not triggered
  return true;
};


module.exports = eqArrays;