// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// recursive built-in JS
function flatten(arr) {
  let flattenArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray = flattenArray.concat(flatten(arr[i]));
    } else {
      flattenArray.push(arr[i]);
    }
  }

  return flattenArray;
}

// recursive basic
function flatten(arr) {
  let flattenArray = [];

  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "object") {
        helper(arr[i]);
      } else {
        flattenArray.push(arr[i]);
      }
    }
  }

  helper(arr);

  return flattenArray;
}

//follow up "till n depth"
function flattenDepth(arr, depth) {
  let result = [];

  function helper(subArr, d) {
    for (let i = 0; i < subArr.length; i++) {
      if (typeof subArr[i] === "object" && d > 0) {
        // If it's an array and depth > 0
        helper(subArr[i], d - 1); // Recurse with reduced depth
      } else {
        result.push(subArr[i]); // Add number to result
      }
    }
  }

  helper(arr, depth); // Start recursion
  return result;
}

console.log(flatten([1, [2, 3], [4, [5, 6]]])); // Output: [1, 2, 3, 4, 5, 6]
console.log(flatten([[1, 2, [3]], 4, [[5]]])); // Output: [1, 2, 3, 4, 5]
console.log(flatten([[], [1, [2, [3, [4]]]]])); // Output: [1, 2, 3, 4]
console.log(flatten([1, 2, 3])); // Output: [1, 2, 3] (Already flat)
console.log(flatten([])); // Output: []
console.log(flatten([[[]]])); // Output: []
