function selectionSort(arr, comparator = (a, b) => (a < b ? -1 : 1)) {
  for (let i = 0; i < arr.length; i++) {
    let min = i; // Start by assuming current index is the minimum
    for (let j = i + 1; j < arr.length; j++) {
      // Find index of the smallest element in unsorted part
      if (comparator(arr[j], arr[min]) <= 0) {
        min = j;
      }
    }

    // Swap if a smaller element was found
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2]));
