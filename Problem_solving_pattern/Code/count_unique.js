// Implement a function called countUniqueValues which accept a sorted array, and counts the unique values in that array. And it can have negative numbers in there, but it will always be sorted.

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;
  let j = 1;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }

    j++;
  }

  const uniqueValue = i + 1;
  return uniqueValue;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
