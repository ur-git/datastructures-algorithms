# Multiple Pointers Pattern

## Definition

The **Multiple Pointers Pattern** involves creating pointers or variables that correspond to an index or position and moving them towards the beginning, the end, or toward each other based on a certain condition.

This pattern is particularly useful when working with **linear data structures** such as arrays, strings, and linked lists.

### Key Characteristics:

- Uses **two or more pointers** to traverse a data structure efficiently.
- Often eliminates the need for **nested loops**, reducing **time complexity**.
- Works well when the data is **sorted**.

## Example Problem: **Sum Zero**

### Problem Statement

Write a function `sumZero` that accepts a **sorted array** of integers. The function should find the **first pair** where the sum is zero and return it as an array. If no such pair exists, return `undefined`.

#### Example Inputs & Outputs:

```js
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]); // [-2, 2]
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

## Naive Approach (O(n²))

A **brute-force** approach involves using **nested loops** to compare every pair of elements and check if their sum equals zero.

```js
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
  return undefined;
}
```

### Time Complexity:

- **O(n²)** due to the **nested loop**.
- Inefficient for large arrays (e.g., **10,000+** elements).

## Optimized Approach: **Multiple Pointers (O(n))**

Using the **two-pointer technique**, we optimize the solution by leveraging the **sorted nature** of the array.

### Steps:

1. **Start two pointers:**
   - One at the **beginning** (`left = 0`).
   - One at the **end** (`right = arr.length - 1`).
2. **Check the sum:**
   - If `arr[left] + arr[right] === 0`, return `[arr[left], arr[right]]`.
   - If the sum is **too large**, decrement the `right` pointer.
   - If the sum is **too small**, increment the `left` pointer.
3. **Repeat** until the pointers cross.

```js
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return undefined;
}
```

### Time Complexity:

- **O(n)** → Only **one pass** through the array.
- **No nested loops**, making it **highly efficient**.

## Explanation:

- We **start with extreme values** and work **towards the center**.
- If the sum is **too high**, move `right` **leftward**.
- If the sum is **too low**, move `left` **rightward**.
- This process ensures **we find the first valid pair efficiently**.

### Dry Run Example:

For `[-4, -3, -2, -1, 0, 1, 2, 5]`:

| Left Pointer | Right Pointer | Sum | Action                 |
| ------------ | ------------- | --- | ---------------------- |
| -4 (0)       | 5 (7)         | 1   | Decrease `right`       |
| -4 (0)       | 2 (6)         | -2  | Increase `left`        |
| -3 (1)       | 2 (6)         | -1  | Increase `left`        |
| -2 (2)       | 2 (6)         | 0   | Found! Return `[-2,2]` |

## Edge Cases:

- **No pairs exist** → Return `undefined`.
- **Array has only positive numbers** → Return `undefined`.
- **Array has only negative numbers** → Return `undefined`.

## Summary

### **Use Cases:**

- Finding **pairs or sets** of elements that meet a condition.
- Efficiently processing **sorted** data.
- Problems involving **directional searching** (e.g., left-right, middle-out).

### **Time Complexity:**

- Naive **O(n²)** → Nested loops (slow for large datasets).
- Optimized **O(n)** → Two pointers (efficient).

### **Key Takeaways:**

- **Leverages sorted arrays** for efficiency.
- **Eliminates unnecessary iterations**.
- **Reduces nested loops**, improving performance.

This pattern is incredibly useful for problems beyond just **sum zero**, such as **pair difference problems**, **palindrome checking**, and **two-sum variations**.

---

## Multiple Pointer Pattern Examples

- [Sum zero]()
- [Average Pair]()
- [Find Pair]()
- [isSubsequence]()
- [Palindrome checking]()
