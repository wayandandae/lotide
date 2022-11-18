// compare two parameters strictly, type must match
const assertEqual = function(actual, expected) {
  // if first and second parameters are strictly identical,
  if (actual === expected) {
    console.log(`😎😎 Assertion Passed: ${actual} === ${expected}`);
    // if first and second parameters are unidentical,
  } else {
    console.log(`🤯🤯 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// return key of which key-value meets the callback condition
const findKey = (object, callback) => {
  // iterate through every property of object
  for (const props in object) {
    // if callback returns truthy value, return key of current value
    if (callback(object[props])) return props;
  }
};

// TEST CASE
const test1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

const matchDay16 = findKey({
  "Arsenal": { points: 37 },
  "Man City": { points: 32 },
  "Newcastle": { points: 30 },
  "Tottenham": { points: 29 },
  "Man United": { points: 26 },
  "Liverpool": { points: 22 },
  "Brighton": { points: 21 },
  "Chelsea": { points: 21 }
}, x => x.points < 22); // => "Brighton"

assertEqual(test1, "noma");
assertEqual(matchDay16, "Brighton");