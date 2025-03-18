# Sliding Window Pattern

## Overview

The **Sliding Window** pattern is a technique used for optimizing problems involving a contiguous subset of elements in an array or string. This method is particularly useful when dealing with problems that require:

- Finding the longest sequence of unique characters in a string
- Calculating the maximum sum of a contiguous subarray of a given length

By maintaining a "window" of elements and adjusting it dynamically, we can improve time complexity significantly compared to naive approaches.

---

## Problem 1: Longest Sequence of Unique Characters in a String

### Problem Statement

Given a string, find the longest contiguous sequence of unique characters.

### Naive Approach

- Iterate through every possible substring, checking for uniqueness.
- Time Complexity: **O(n²)**

### Optimized Approach (Sliding Window)

- Maintain a **window** that expands when characters are unique.
- When a duplicate character is encountered, adjust the left boundary.
- Use a **Set** (or HashMap) to keep track of characters.
- Time Complexity: **O(n)**

```js
function longestUniqueSubstring(s) {
  let set = new Set();
  let left = 0,
    maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
```

#### Iterations

**Input:** `"abcabcbb"`
| `right` | `s[right]` | `set` (current window) | `left` moves? | `maxLength` |
|---------|-----------|-----------------|--------------|-----------|
| 0 | `'a'` | `{a}` | No | 1 |
| 1 | `'b'` | `{a, b}` | No | 2 |
| 2 | `'c'` | `{a, b, c}` | No | 3 |
| 3 | `'a'` | `{b, c, a}` | Yes (Remove `a`, left → 1) | 3 |
| 4 | `'b'` | `{c, a, b}` | Yes (Remove `b`, left → 2) | 3 |
| 5 | `'c'` | `{a, b, c}` | Yes (Remove `c`, left → 3) | 3 |
| 6 | `'b'` | `{a, c, b}` | Yes (Remove `a`, left → 4) | 3 |
| 7 | `'b'` | `{c, b}` | Yes (Remove `c`, left → 5) | 3 |

Final Output: `3` (`"abc"` is the longest unique substring)

---

## Problem 2: Maximum Sum of n Consecutive Elements

### Problem Statement

Given an array of integers and a number **n**, find the maximum sum of **n** consecutive elements.

### Naive Approach (Brute Force)

- Use nested loops:
  - Outer loop starts at each element.
  - Inner loop sums the next **n** elements.
- Time Complexity: **O(n²)**

```js
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = -Infinity;

  for (let i = 0; i <= arr.length - num; i++) {
    let tempSum = 0;
    for (let j = 0; j < num; j++) {
      tempSum += arr[i + j];
    }
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

### Optimized Approach (Sliding Window)

- Compute the sum of the first **n** elements.
- Slide the window by subtracting the element that is leaving and adding the new element.
- Time Complexity: **O(n)**

```js
function maxSubarraySumOptimized(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0,
    tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

#### Iterations:

| Window | Elements    | Sum | Max Sum Updated? | Start Index |
| ------ | ----------- | --- | ---------------- | ----------- |
| 1st    | `[2, 3, 5]` | 10  | ✅ Yes (10)      | 0           |
| 2nd    | `[3, 5, 2]` | 10  | ❌ No            | 0           |
| 3rd    | `[5, 2, 9]` | 16  | ✅ Yes (16)      | 2           |
| 4th    | `[2, 9, 7]` | 18  | ✅ Yes (18)      | 3           |
| 5th    | `[9, 7, 1]` | 17  | ❌ No            | 3           |

### Explanation

- The first loop computes the initial sum.
- The second loop **slides the window** by subtracting the element that moves out and adding the new element.
- This eliminates unnecessary summation operations, leading to **O(n) complexity**.

---

## Key Takeaways

- **Sliding Window** reduces redundant computations by leveraging previously calculated results.
- It is an optimal approach for problems involving contiguous elements.
- Drastically improves performance compared to brute-force methods.
- **Time Complexity Improvement:**
  - Brute Force: **O(n²)**
  - Sliding Window: **O(n)**

### When to Use Sliding Window

- When dealing with **contiguous** sequences in arrays or strings.
- When a **fixed-length** or **variable-length** subarray needs to be analyzed.

## Summary

The **Sliding Window** technique is a powerful approach for optimizing problems involving contiguous elements. By maintaining a dynamically adjustable window, we significantly reduce time complexity from **O(n²) to O(n)** in many cases. This makes it a crucial tool for handling large datasets efficiently.

---

## Sliding Pattern Examples

- [Max Subarray Sum](./Problem_Set//maxSubarraySum.js)
- [Min Subarray Length](./Problem_Set/minSubArrayLen.js)
- [Find Longest Substring](./Problem_Set/longestUniqueSubstring.js)
