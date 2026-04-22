const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the size of the array: ", (size) => {
  const arr = [];
  console.log("Enter the elements of the array:");
  let count = 0;
  rl.on("line", (input) => {
    arr.push(parseInt(input));
    count++;
    if (count === parseInt(size)) {
      const uniqueArr = [...new Set(arr)];
      console.log("Array after removing duplicates: " + uniqueArr);
      rl.close();
    }
  });
});
