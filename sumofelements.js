const readline = require("readline-sync");
const sumofelements = readline.questionInt(
  "Enter the size of elemts in array: ",
);
const arr = [];
console.log("Enter the elements of the array:");
for (let i = 0; i < sumofelements; i++) {
  arr[i] = parseInt(readline.question());
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log("Sum of elements in the array is: " + sum);
