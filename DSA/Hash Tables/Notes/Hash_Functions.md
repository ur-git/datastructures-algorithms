# Hash Functions

## Hash Functions

A **hash function** converts a key (e.g., a string) into an index in the hash table.

### Properties of a Good Hash Function

1. **Fast Execution** - Should operate in **constant time O(1)**.
2. **Uniform Distribution** - Should distribute values evenly across the table to minimize collisions.
3. **Deterministic** - The same input should always produce the same output.
4. **Fixed Output Size** - Maps arbitrary input sizes to a fixed range.

### Hash Function Usage in Computing

- **Hash Tables** (fast lookup, insertion, deletion)
- **Data Security** (password hashing, digital signatures)
- **Cryptography** (cryptographic hash functions like SHA-256)
- **Blockchain** (proof-of-work, Merkle trees)

### Bad Hash Functions Examples

#### 1. Slow Hash Function

```js
function badHash(key) {
  for (let i = 0; i < 10000; i++) console.log("Slow operation");
  return key.length;
}
```

- **Issue:** Unnecessary looping, making it inefficient.

#### 2. Poor Distribution

```js
function badHash(key) {
  return 0; // Every key maps to index 0
}
```

- **Issue:** Causes massive collisions, making the table inefficient.

#### 3. Non-Deterministic

```js
function badHash(key) {
  return Math.random() * 1000;
}
```

- **Issue:** Different outputs for the same input, breaking consistency.

### Designing a Simple Hash Function

A basic (but not cryptographic) hash function can sum character codes and use modulus to stay within a table size.

```js
function simpleHash(key, arraySize) {
  let total = 0;
  for (let char of key) {
    total += char.charCodeAt(0);
  }
  return total % arraySize;
}

console.log(simpleHash("pink", 10)); // Generates an index
```

- **Deterministic** → Same input yields the same output.
- **Fast Execution** → Iterates once over the string (O(n)).
- **Fixed Output Range** → Ensures indices fit within table size.

# Basic Hash Function Implementation in JavaScript

## Goal

To write a basic hash function that converts a string into a valid index within a given array length.

## Function Signature

```js
function hash(key, arrayLength) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96; // Convert character to alphabetic position
    total = (total + value) % arrayLength;
  }
  return total;
}
```

## Explanation

1. The function takes two inputs:
   - `key`: A string (e.g., "pink")
   - `arrayLength`: The size of the array we want to map the string to.
2. The function initializes a `total` variable to 0.
3. It loops through each character of the string and:
   - Retrieves its UTF-16 character code using `charCodeAt(0)`.
   - Subtracts 96 to map 'a' to 1, 'b' to 2, ..., 'z' to 26.
   - Adds this value to `total`.
   - Uses modulo (`% arrayLength`) to ensure the result is within valid array indices.
4. Finally, the function returns the computed hash value.

## Example Usage

```js
console.log(hash("pink", 10)); // Output: 0
console.log(hash("orange", 10)); // Output: 0
console.log(hash("cyan", 10)); // Output: 3
console.log(hash("purple", 10)); // Output: 8
```

## Issues with This Hash Function

1. **Limited Data Types**: It only works with strings, failing with numbers, booleans, or arrays.
2. **Non-Constant Time Complexity**:
   - Time complexity: **O(n)** (depends on string length)
   - We want a constant **O(1)** time hashing function.
3. **Poor Distribution**:
   - Clustering occurs because similar strings produce the same output.
   - Many words hash to the same index, increasing collisions.

## Improvements (Next Steps)

1. **Use Prime Numbers**:
   - Prime numbers help distribute values more evenly.
   - They reduce clustering and improve randomness.
2. **Constant Time Complexity**:
   - Modify the function to ensure the time taken does not depend on the input length.

In the next iteration, we will incorporate prime numbers and enhance randomness to create a more effective hash function.

---

## Implementation Code - [See Here](../hash_function.js)
