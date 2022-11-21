const assertEqual = require('../assertEqual');

// TEST CODE
// unidentical strings
assertEqual("Lighthouse Labs", "Bootcamp");
// identical numbers
assertEqual(1, 1);
// identical strings
assertEqual("Good", "Good");
// unidentical numbers
assertEqual(3, 5);