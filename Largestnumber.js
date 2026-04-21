//Find the largest and smallest element in an array
const readline = require("readline-sync");

const size = readline.questionInt("Enter the size of the array: ");
const arr = [];
console.log("Enter the elements of the array:");
for (let i = 0; i < size; i++) {
  arr[i] = parseInt(readline.question());
}
let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log("Largest element:", max);
console.log("Smallest element:", min);
