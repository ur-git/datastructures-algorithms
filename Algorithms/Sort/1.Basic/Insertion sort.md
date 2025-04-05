# Insertion Sort

## Overview

Insertion Sort is one of the elementary sorting algorithms, often used for small or nearly sorted datasets. It builds the sorted portion of the array one element at a time by inserting each item into its correct position relative to the already sorted part of the array.

---

## Algorithm Pseudocode)=

- Begin with the second element (first element is trivially considered sorted).
- Compare it with the elements in the sorted portion (left side).
- Insert the element in its correct position within the sorted part.
- Repeat until all elements are placed appropriately.

```text
for i from 1 to length(array) - 1:
    current = array[i]
    j = i - 1
    while j >= 0 and array[j] > current:
        array[j + 1] = array[j]
        j -= 1
    array[j + 1] = current
```

Initial Array:

```text
[5, 3, 4, 1, 2]
```

Steps:

1. Compare 3 with 5 → insert before 5 → `[3, 5, 4, 1, 2]`
2. Compare 4 with 5 → insert before 5 → `[3, 4, 5, 1, 2]`
3. Compare 1 with 5, 4, 3 → insert at beginning → `[1, 3, 4, 5, 2]`
4. Compare 2 with 5, 4, 3 → insert after 1 → `[1, 2, 3, 4, 5]`

Sorted Array:

```text
[1, 2, 3, 4, 5]
```

---

## JavaScript Implementation

```javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }
  return arr;
}
```

---

## Characteristics

- **Stable**: Maintains the relative order of equal elements
- **In-place**: Uses constant space
- **Adaptive**: Efficient for nearly sorted data
- **Simple**: Easy to implement and understand

---

## Pros and Cons

### Pros:

- Simple to implement
- Fast for nearly sorted arrays (O(n))
- No extra memory required
- Stable sort

### Cons:

- Inefficient on large datasets (O(n^2))
- More shifting than bubble/selection sort in some cases

---
