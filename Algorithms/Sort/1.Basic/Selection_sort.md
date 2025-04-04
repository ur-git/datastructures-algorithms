# Selection Sort - [Visualize here](https://visualgo.net/en/sorting?slide=1)

## Overview

Selection Sort is a simple comparison-based sorting algorithm that works by repeatedly selecting the minimum element from the unsorted portion of the array and swapping it with the first unsorted element.

Similar to Bubble Sort, but instead of pushing largest values to the end, it pulls smallest values to the beginning.

## Pseudocode

1. Store the first element as smallest value
2. Compare this item to next item in array until you find a smaller number.
3. If smaller element is found, designate that smaller number to new "minimum" and continue until end of array
4. If "minimum" is not the value you initially begin with, then swap the two values
5. Move to the next position and repeat the process until the entire array is sorted.

```plaintext
selectionSort(arr):
  for i from 0 to length(arr) - 1:
    minIndex = i
    for j from i+1 to length(arr) - 1:
      if arr[j] < arr[minIndex]:
        minIndex = j
    if minIndex != i:
      swap(arr[i], arr[minIndex])
  return arr
```

## JavaScript Implementation

```javascript
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
    }
  }
  return arr;
}
```

**Unsorted Array:** `[5, 3, 4, 1, 2]`

First Pass:

- Assume `5` is the minimum.
- Compare `5` with `3`, `4`, `1`, `2`. The smallest is `1`.
- Swap `1` with `5`: `[1, 3, 4, 5, 2]`

Second Pass:

- Assume `3` is the minimum.
- Compare `3` with `4`, `5`, `2`. The smallest is `2`.
- Swap `2` with `3`: `[1, 2, 4, 5, 3]`

Third Pass:

- Assume `4` is the minimum.
- Compare `4` with `5`, `3`. The smallest is `3`.
- Swap `3` with `4`: `[1, 2, 3, 5, 4]`

Fourth Pass:

- Assume `5` is the minimum.
- Compare `5` with `4`. The smallest is `4`.
- Swap `4` with `5`: `[1, 2, 3, 4, 5]` (Sorted!)

## Time Complexity

| Case    | Complexity |
| ------- | ---------- |
| Best    | O(n²)      |
| Average | O(n²)      |
| Worst   | O(n²)      |

- **Best Case (Already Sorted):** O(n²) as it still goes through the entire array.
- **Average and Worst Cases:** O(n²) due to nested loops.
- **Number of Comparisons:** (n-1) + (n-2) + ... + 1 = O(n²)
- **Number of Swaps:** O(n), as there is at most one swap per iteration.

## Space Complexity

- **O(1)**: Sorting is done in place, using constant extra space.

## Advantages

- Simple and easy to implement.
- Works well for small datasets.
- Performs well when swaps are more expensive than comparisons (e.g., when working with disk storage).

## Disadvantages

- Inefficient for large datasets due to O(n²) complexity.
- Always performs O(n²) comparisons, even if the array is already sorted.

## When to Use Selection Sort

- When a small dataset needs to be sorted.
- When memory space is a concern (in-place sorting).
- When swaps are more costly than comparisons.

## Summary

Selection Sort is an intuitive but inefficient sorting algorithm that selects the smallest element iteratively and places it at its correct position. It has a time complexity of O(n²), making it impractical for large datasets but useful in certain cases where swaps need to be minimized.
