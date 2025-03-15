// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

//recursion
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

//using built-in js method
function productOfArray(arr) {
  return arr.reduce((acc, current) => acc * current);
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
