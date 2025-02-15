# Hash Tables in JavaScript

## Introduction

Hash tables (also known as hash maps) are fundamental data structures used to store key-value pairs. They provide efficient operations for insertion, deletion, and lookup, making them widely used in programming languages such as JavaScript, Python, Ruby, Java, and more.

## Why Use Hash Tables?

- **Fast Operations:** Hash tables allow quick lookup, insertion, and deletion operations.
- **Key-Value Storage:** Unlike arrays, which have numeric indices, hash tables allow the use of arbitrary keys.
- **Unordered Data:** Data in hash tables is not stored in a specific order, unlike arrays.
- **Built-in Implementations:** Most languages have built-in hash table implementations, such as:
  - JavaScript: `Object` and `Map`
  - Python: `dict`
  - Java: `Map`
  - Ruby: `Hash`
  - Go: `map`

## How Hash Tables Work

### Basic Idea

Hash tables store key-value pairs by converting keys into numerical indices using a **hash function**. The key is hashed to generate an index where the value is stored.

### Example:

Consider storing color codes:

```js
const colors = {
  pink: "#FFC0CB",
  orange: "#FFA500",
  cyan: "#00FFFF",
};
```

Instead of using an array, which provides only numerical indices, a hash table allows meaningful keys such as "pink" or "cyan".

### Hash Function

A **hash function** takes an input (key) and maps it to an integer within a fixed range, which serves as an index in an array.

#### Properties of a Good Hash Function:

1. **Deterministic:** The same input always results in the same output.
2. **Uniform Distribution:** It should distribute values evenly across available indices to minimize collisions.
3. **Fast Computation:** The function should be computationally efficient.
4. **Minimal Collisions:** Collisions occur when two different keys hash to the same index; a good hash function minimizes this.

### Handling Collisions

Two common techniques for handling collisions are:

1. **Separate Chaining:** Uses linked lists at each index to store multiple values.
2. **Linear Probing:** If a collision occurs, the function searches for the next available slot in a sequential manner.

## Conclusion

- Hash tables provide an efficient way to store and retrieve key-value pairs.
- They rely on hash functions to map keys to numerical indices.
- Collisions are inevitable but can be managed using techniques like separate chaining and linear probing.
- JavaScript provides built-in hash table implementations via `Object` and `Map`, but understanding their underlying mechanics is beneficial.

In the next section, we will dive deeper into the challenges of designing an efficient hash function and explore real-world applications of hash tables.
