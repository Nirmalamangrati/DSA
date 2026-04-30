function findMissingNumber(arr) {
  let n = arr.length;

  let expectedSum = (n * (n + 1)) / 2;

  let actualSum = 0;

  for (let i = 0; i < n; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;
}

console.log(findMissingNumber([3, 0, 1]));
