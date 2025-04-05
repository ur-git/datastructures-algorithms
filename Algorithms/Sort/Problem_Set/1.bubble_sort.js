//brute-force
function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap if elements are in the wrong order
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//optimized to reduce number of iterations,
function sort(arr) {
  // Outer loop starts from the end of the array and moves backward
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

//Optimized with no swaps
function sort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true; // Assume no swaps will occur in this pass

    // Inner loop goes from the start up to the unsorted portion
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false; // A swap occurred, so the array wasn't fully sorted yet
      }
    }

    // If no swaps occurred during this pass, the array is sorted — exit early
    if (noSwaps) break;
  }

  return arr;
}

console.log(sort([12, 3, 7, 1, 22]));
