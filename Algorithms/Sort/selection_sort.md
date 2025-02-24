# Selection Sort - Expert Notes

## Overview

Selection Sort is a simple comparison-based sorting algorithm that works by repeatedly selecting the minimum element from the unsorted portion of the array and swapping it with the first unsorted element. Unlike Bubble Sort, which moves the largest values to their correct position, Selection Sort moves the smallest values into their correct place one by one.

## Algorithm Explanation

1. Start with the first element and assume it's the minimum.
2. Scan the rest of the array to find the actual minimum value.
3. Swap the minimum value found with the first unsorted element.
4. Move to the next position and repeat the process until the entire array is sorted.

### Example Walkthrough

**Unsorted Array:** `[5, 3, 4, 1, 2]`

#### First Pass:

- Assume `5` is the minimum.
- Compare `5` with `3`, `4`, `1`, `2`. The smallest is `1`.
- Swap `1` with `5`: `[1, 3, 4, 5, 2]`

#### Second Pass:

- Assume `3` is the minimum.
- Compare `3` with `4`, `5`, `2`. The smallest is `2`.
- Swap `2` with `3`: `[1, 2, 4, 5, 3]`

#### Third Pass:

- Assume `4` is the minimum.
- Compare `4` with `5`, `3`. The smallest is `3`.
- Swap `3` with `4`: `[1, 2, 3, 5, 4]`

#### Fourth Pass:

- Assume `5` is the minimum.
- Compare `5` with `4`. The smallest is `4`.
- Swap `4` with `5`: `[1, 2, 3, 4, 5]` (Sorted!)

## Pseudocode

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
