const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// array of single item
assertEqual(head([5]), 5);
// emptry array
assertEqual(head([]), "Hello");