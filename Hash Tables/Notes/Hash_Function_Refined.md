# Refining the Hash Function

## Introduction

In this revision, we are improving the previous hash function to achieve two key goals:

- **Performance Improvement**: Ensuring the function runs closer to constant time.
- **Better Distribution**: Increasing randomness in key distribution across buckets.

The new hash function remains basic and imperfect but is slightly optimized for better efficiency.

---

## Improvements

### 1. Limiting Iterations for Large Keys

If the input key is excessively long (e.g., 1 million characters), iterating over every character is inefficient. To mitigate this:

- We set a limit using `Math.min(key.length, 100)`, ensuring we iterate at most **100 characters**.
- If the key length is below 100, we loop through all characters.
- This provides a small but meaningful improvement in efficiency.

_Example:_

- **Key: "hello" (5 characters)** → Iterate over all 5 characters.
- **Key: 1 million characters** → Iterate over **only the first 100** characters.

Though this may not be crucial in our use case (since we are dealing with small strings), it highlights the importance of optimizing hash functions for efficiency.

### 2. Utilizing Prime Numbers

Using prime numbers in hash functions is a well-established practice, primarily for **collision reduction**. While the deep mathematical reasons are complex, research and experiments demonstrate that:

- Using a prime-number-sized hash table significantly **reduces collisions**.
- Data distributes more uniformly across buckets.
- **Empirical evidence** (e.g., MIT research, Quora/Stack Overflow discussions) supports this claim.

#### Example Data on Collisions:

| Table Size                  | Collision Count   |
| --------------------------- | ----------------- |
| **Prime (8191)**            | 1.92              |
| **Non-Prime (8192)**        | Much higher       |
| **Prime (Prime Length)**    | Lower Collisions  |
| **Non-Prime (Even Length)** | Higher Collisions |

From the table above, switching from an even-number-sized table to a **prime-sized table** led to **multiple orders of magnitude decrease in collisions**.

### 3. Updated Hash Function

- Takes a **key** (string) and an **array length** (ideally a prime number).
- Limits iterations to **100 characters** for performance.
- Ensures the **array length is prime** for better distribution.

#### Example Output:

| Key       | Prime Table Size (13) | Hashed Index   |
| --------- | --------------------- | -------------- |
| "hello"   | 13                    | 7              |
| "goodbye" | 13                    | 9              |
| "cyan"    | 13                    | 5              |
| "pink"    | 13                    | 5 (Collision!) |

### 4. Handling Collisions

Collisions occur when two keys hash to the same index (e.g., "cyan" and "pink" both hash to `5`). Possible solutions:

1. **Separate Chaining** (linked lists at each index)
2. **Linear Probing** (finding the next available slot)

We will explore collision resolution strategies in the next section.

---

## Summary

✅ **Performance Improvement**: Capped iterations at 100 characters.
✅ **Better Distribution**: Used prime numbers for array length.
✅ **Collision Handling**: Identified the need for a strategy.

This refined hash function lays the foundation for implementing a full hash table. Next, we will discuss how to handle collisions efficiently.

---

## Implementation Code - [See Here](../hash_function.js)
