const readline = require("readline-sync");
const nameOrNumber = readline.question("Enter the name or number: ");
const reverse = [nameOrNumber.split("").reverse().join("")];
console.log("Reverse of the name or number is: " + reverse);
