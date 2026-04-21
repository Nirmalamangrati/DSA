const readline = require("readline-sync");

const secondlargestelements = readline.questionInt(
  "Enter the size of the array:",
);
const arr = [];
console.log("Enter the elements of the array:");
for (let i = 0; i < secondlargestelements; i++) {
  arr[i] = parseInt(readline.question());
}
let max = arr[0];
let secondMax = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    secondMax = max;
    max = arr[i];
  } else if (arr[i] > secondMax && arr[i] != max) {
    secondMax = arr[i];
  }
}
console.log("Second largest element in the array is: " + secondMax);
