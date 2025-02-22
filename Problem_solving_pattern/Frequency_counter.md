# Frequency Counter Pattern

## Overview

The **Frequency Counter Pattern** is a technique used in algorithm optimization to reduce time complexity, often replacing nested loops (O(n²)) with more efficient linear solutions (O(n)). It leverages objects (or hash maps) to store the frequency of elements in a collection, enabling quick lookups and comparisons.

## When to Use

This pattern is useful when:

- Comparing two datasets for similar values (e.g., anagrams, permutations, squared values, etc.).
- Checking if a value exists in another dataset.
- Counting occurrences of elements in a collection.
- Avoiding nested loops that increase time complexity.

## Problem Example: Checking Squared Elements

**Problem:** Implement a function `same(arr1, arr2)` that checks whether every element in `arr1` has its squared value in `arr2`, regardless of order.

### Naïve Solution (O(n²))

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let index = arr2.indexOf(arr1[i] ** 2);
    if (index === -1) return false;
    arr2.splice(index, 1); // Remove matched element
  }
  return true;
}
```

#### Issues:

- Uses `indexOf()`, which performs a linear search within a loop, resulting in O(n²) complexity.
- Inefficient for large datasets.

### Optimized Solution Using Frequency Counter (O(n))

```js
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }

  for (let num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    let squaredKey = key ** 2;
    if (!(squaredKey in frequencyCounter2)) return false;
    if (frequencyCounter2[squaredKey] !== frequencyCounter1[key]) return false;
  }

  return true;
}
```

#### Breakdown:

1. **First loop:** Counts occurrences of each value in `arr1`.
2. **Second loop:** Counts occurrences of each value in `arr2`.
3. **Third loop:** Compares frequencies and ensures squared values exist in `arr2`.

### Complexity Analysis

- Constructing frequency objects: **O(n)**
- Iterating over the keys: **O(n)**
- Overall: **O(n) + O(n) + O(n) ≈ O(n)** (linear time)

## Key Takeaways

- **Transforms O(n²) solutions into O(n) using object lookups.**
- **Reduces redundancy in comparisons and searches.**
- **Applicable to problems involving element frequency comparisons, such as anagram detection.**
- **Ideal for handling large datasets efficiently.**

---

## Frequency Counter Pattern Examples

- [Anagram detection](./Problem_Set/anagram.js)
- [Finding all duplicate](./Problem_Set/findAllDuplicates.js)
- [Are there duplicate](./Problem_Set/areThereDuplicates.js)
- [Construct Note](./Problem_Set/constructNote.js)
- [Same Frequency](./Problem_Set/same_frequency.js)
