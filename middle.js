// find middle item or items depending on the length of input array
const middle = array => {
  // create an array to hold middle items
  const resultArray = [];
  // create a variable to hold the length of array
  const count = array.length;
  // only push items if array length is longer than 2
  if (count > 2) {
    // check if array length is even
    count % 2 === 0 ?
      // push two middle items if even number of items
      resultArray.push(array[count / 2 - 1], array[count / 2]) :
      // push single middle item if odd
      resultArray.push(array[(count + 1) / 2 - 1]);
  }

  return resultArray;
};


module.exports = middle;