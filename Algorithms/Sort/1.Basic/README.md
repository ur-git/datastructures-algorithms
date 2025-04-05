# Sorting - [Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms)

## Elementary Sorting Algorithms

Bubble Sort, Selection Sort, and Insertion Sort are three fundamental sorting algorithms. They are classified as **quadratic sorting algorithms** due to their worst-case and average-case time complexity of **O(n²)**. While these algorithms are simple to understand and implement, they are inefficient for large datasets.

## Time Complexity Analysis

| Algorithm      | Best Case | Average Case | Worst Case |
| -------------- | --------- | ------------ | ---------- |
| Bubble Sort    | O(n)      | O(n²)        | O(n²)      |
| Selection Sort | O(n²)     | O(n²)        | O(n²)      |
| Insertion Sort | O(n)      | O(n²)        | O(n²)      |

- **Best-case scenario:** Bubble Sort and Insertion Sort perform well (O(n)) when the array is nearly sorted.
- **Worst-case scenario:** All three algorithms degrade to O(n²) when dealing with an unsorted array.

## Space Complexity

| Algorithm      | Space Complexity |
| -------------- | ---------------- |
| Bubble Sort    | O(1)             |
| Selection Sort | O(1)             |
| Insertion Sort | O(1)             |

Since these algorithms operate **in-place**, they require only a **constant amount of additional memory** (O(1)). This makes them efficient in terms of space.

## Algorithmic Behavior & Use Cases

### Bubble Sort

- **Mechanism:** Repeatedly swaps adjacent elements if they are in the wrong order.
- **Best Use Case:** Works well when data is nearly sorted due to early termination optimization.
- **Drawback:** Too many unnecessary swaps in the worst case.

### Selection Sort

- **Mechanism:** Selects the minimum element in each pass and swaps it with the first unsorted element.
- **Best Use Case:** When swaps are costly (since it performs at most O(n) swaps).
- **Drawback:** Always runs in O(n²), even if the data is nearly sorted.

### Insertion Sort

- **Mechanism:** Picks an element and places it in the correct position by shifting elements.
- **Best Use Case:** Works efficiently with small or nearly sorted datasets. It is also ideal for scenarios where elements are continuously added to a sorted list.
- **Drawback:** Slows down with large, unsorted data due to O(n²) complexity.

## Summary & Key Takeaways

1. **Insertion Sort is the most efficient of the three for nearly sorted data** due to its O(n) best-case performance.
2. **Bubble Sort can be optimized to detect early sorting**, making it better than Selection Sort in such cases.
3. **Selection Sort is simple but inefficient** in most practical applications due to its consistent O(n²) behavior.
4. **All three sorting algorithms are only suitable for small datasets** or when simplicity and low memory usage are priorities.
