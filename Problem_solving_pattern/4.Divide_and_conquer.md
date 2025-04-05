# Divide and Conquer Algorithm

## Introduction

Divide and conquer is a well-documented algorithmic paradigm that involves breaking down a large problem into smaller, more manageable subproblems, solving each recursively, and then combining the solutions. This technique is widely used in various algorithms such as sorting and searching.

## Concept

The fundamental idea behind divide and conquer is:

1. **Divide**: Split the given problem into smaller subproblems.
2. **Conquer**: Solve the subproblems recursively (if needed).
3. **Combine**: Merge the solutions of the subproblems to get the final solution.

## Applications

This method is commonly applied to:

- **Sorting algorithms** (Merge Sort, Quick Sort)
- **Searching algorithms** (Binary Search)
- **Tree-based operations** (Binary Search Trees)

### Example: Binary Search

Binary Search is a classic example of divide and conquer. It is used to find an element in a sorted array efficiently.

#### Algorithm Steps:

1. Pick the middle element of the sorted array.
2. If it matches the target value, return the index.
3. If the target value is smaller, repeat the search on the left half.
4. If the target value is larger, repeat the search on the right half.
5. Repeat this process until the value is found or the subarray size becomes zero.

#### Complexity Analysis:

- **Linear Search**: O(n) time complexity (scanning through all elements).
- **Binary Search**: O(log n) time complexity (halving the array each step).

#### Example Execution:

```plaintext
Array: [1, 3, 5, 7, 9, 11, 15, 17, 19]
Target: 15
Step 1: Middle = 9 → 15 > 9, search in [11, 15, 17, 19]
Step 2: Middle = 15 → Found! Return index.
```

## Advanced Use Cases

### Merge Sort

- Recursively divides the array into two halves until each half contains one element.
- Merges the sorted halves back together.
- Time Complexity: O(n log n)

### Quick Sort

- Selects a pivot and partitions the array such that elements smaller than the pivot move left, and larger elements move right.
- Recursively sorts the partitions.
- Time Complexity: O(n log n) in the best/average case, O(n^2) in the worst case.

## Conclusion

Divide and conquer is an essential algorithmic strategy that significantly optimizes performance, especially in large datasets. It is commonly used in searching and sorting problems, making it a fundamental concept in computer science.

## Divide and Conquer Pattern Examples

- [Count Zeros]()
- [Sorted Frequency]()
- [Find rotated index]()
