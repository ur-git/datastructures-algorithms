function insertionSort(arr, comparator = (a, b) => (a < b ? -1 : 1)) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

      // Shift elements to the right to make space for currentValue
    while (j >= 0 && comparator(arr[j], current) >= 0) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current value into the correct position
    arr[j + 1] = current;
  }
  return arr;
}
