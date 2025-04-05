# Merge Sort

It follows the **divide and conquer** approach, which involves:

1. **Splitting** the array into smaller sub-arrays until they contain only one element.
2. **Sorting** these individual elements (trivially sorted as they are single elements).
3. **Merging** them back together in a sorted manner.

## How Merge Sort Works

1. **Divide** the array into two halves recursively until each sub-array contains only one element.
2. **Merge** the sub-arrays back together in sorted order.

### Example

Given Array: `[8, 3, 5, 4, 7, 6, 1, 2]`

1. **Splitting Phase:**

   - `[8, 3, 5, 4]` and `[7, 6, 1, 2]`
   - `[8, 3]`, `[5, 4]`, `[7, 6]`, `[1, 2]`
   - `[8]`, `[3]`, `[5]`, `[4]`, `[7]`, `[6]`, `[1]`, `[2]`

2. **Merging Phase:**
   - Merge `[8]` and `[3]` -> `[3, 8]`
   - Merge `[5]` and `[4]` -> `[4, 5]`
   - Merge `[7]` and `[6]` -> `[6, 7]`
   - Merge `[1]` and `[2]` -> `[1, 2]`
   - Merge `[3, 8]` and `[4, 5]` -> `[3, 4, 5, 8]`
   - Merge `[6, 7]` and `[1, 2]` -> `[1, 2, 6, 7]`
   - Merge `[3, 4, 5, 8]` and `[1, 2, 6, 7]` -> `[1, 2, 3, 4, 5, 6, 7, 8]`

## Time Complexity Analysis

- **Best Case:** `O(n log n)`
- **Average Case:** `O(n log n)`
- **Worst Case:** `O(n log n)`

## Space Complexity

- `O(n)` due to additional arrays being created during merging.

## Advantages of Merge Sort

- **Consistent `O(n log n)` performance** in all cases.
- **Stable Sort** (maintains relative order of equal elements).
- **Useful for sorting linked lists** (as merging is efficient in linked lists).

## Disadvantages

- **Higher space complexity** (`O(n)`) due to auxiliary arrays.
- **Slower for small datasets** compared to simpler algorithms like insertion sort.
