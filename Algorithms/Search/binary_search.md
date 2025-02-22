## Binary Search

### Overview

Binary search is a much faster searching algorithm but requires a **sorted** array. It works by repeatedly dividing the search interval in half.

### Algorithm

1. Set two pointers, `left` at the beginning and `right` at the end of the array.
2. Find the middle element:
   - If it matches the target, return its index.
   - If the target is less than the middle element, search the left half.
   - If the target is greater than the middle element, search the right half.
3. Repeat until the pointers cross each other.

### Implementation in JavaScript

```javascript
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
```

### Time Complexity

- **Best Case:** `O(1)` (if the middle element is the target)
- **Worst Case:** `O(log n)`
- **Average Case:** `O(log n)`

### Explanation of `O(log n)` Complexity

Binary search follows a **divide and conquer** approach:

1. The search space is divided in half at each step.
2. If there are `n` elements initially, after 1 step, `n/2` elements remain.
3. After 2 steps, `n/4` elements remain, and so on.
4. The process continues until only 1 element remains, meaning we perform at most `log₂(n)` steps.
5. This gives a time complexity of `O(log n)`, meaning even for large `n`, the number of operations remains small.

### Key Takeaways

- Linear search works on **unsorted** lists but is slower for large datasets.
- Binary search is much **faster** but requires a **sorted** list.
- Binary search is ideal for cases where searching efficiency is crucial, and data can be sorted beforehand.
