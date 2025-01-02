const { linear, binary } = require("./searching.js"); // Destructure the required functions
console.log("start");
let arr = [8, 3, 2, 2, 4, 5, 6, 7, 8, 9, 10];
let x = 4;
let result = linear(arr, x);
let binaryRes = binary(arr, x);
console.log(result);
console.log(binaryRes); // Log the result of binary search
