# Linear Search

## Introduction

Linear search is a simple searching algorithm that checks each element in a list sequentially until the desired element is found or the list ends. This is often the easiest and most straightforward search method.

## Use Case

Imagine we have an array containing U.S. states and territories, and a user inputs a state name. We need to check if the state exists in our array.

## Explanation

The simplest way to check if an element exists in an array is to iterate through each item and compare it with the desired value. If a match is found, we return the index or `true`. If we reach the end of the array without finding a match, we return `false` or `-1` (depending on the use case).

This process is called **linear search**. It is commonly used when the data is unsorted, as sorting first would be inefficient.

## Built-in JavaScript Methods

Many JavaScript methods perform linear search under the hood:

- `indexOf(value)`: Returns the index of `value` if found, otherwise returns `-1`.
- `includes(value)`: Returns `true` if `value` is found, otherwise returns `false`.
- `find(callback)`: Returns the first matching element.
- `findIndex(callback)`: Returns the index of the first matching element.

Example:

```javascript
const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California"];
console.log(states.indexOf("Arizona")); // Output: 2
console.log(states.includes("Texas")); // Output: false
```

## Implementing Linear Search

Here is the implementation of linear search in JavaScript:

```javascript
function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i; // Return index if found
    }
  }
  return -1; // Return -1 if not found
}

const numbers = [5, 8, 1, 100, 12, 3];
console.log(linearSearch(numbers, 12)); // Output: 4
console.log(linearSearch(numbers, 7)); // Output: -1
```

## Time Complexity

- **Best case:** `O(1)` (if the element is the first item in the array)
- **Worst case:** `O(n)` (if the element is not present or at the end of the array)
- **Average case:** `O(n)` (since we may have to iterate through most of the array)

## Summary

- Linear search is simple and works for both sorted and unsorted data.
- It is inefficient for large datasets when compared to algorithms like binary search.
- It is used in built-in JavaScript methods like `indexOf` and `includes`.
- Time complexity is `O(n)`, making it inefficient for large lists but useful for small, unsorted datasets.
