# Handling Collisions in Hash Tables

## Hash Table Class Implementation

### Overview

We will now implement a basic **hash table** class to understand how hash tables work internally. This implementation will focus on:

- **Separate chaining** for collision handling
- **Prime number table size** for better distribution

### Hash Table Starter Code

We define a `HashTable` class with:

- A **constructor** that initializes an array (`keyMap`) of a given size (default: **53**, a prime number).
- A **hash function** that takes a key and returns a valid index within the array.

## Implementing `set` Method

The `set` method stores a **key-value pair** in the hash table using **separate chaining**:

1. **Hash the key** to get an index.
2. **Check if data exists** at that index:
   - If not, create a **new array**.
   - If yes, push the new key-value pair into the existing array.

## Implementing `get` Method

The `get` method retrieves a **value** given a key:

1. **Hash the key** to get the index.
2. **Check if any data exists** at that index:
   - If empty, return `undefined`.
   - Otherwise, iterate over the stored array and find the matching key.

## Recap

- **Separate chaining** allows multiple key-value pairs at the same index.
- The `set` method hashes keys and stores values in nested arrays.
- The `get` method retrieves values by iterating over these arrays.
- If a key is **not found**, `undefined` is returned.

## Implementation Code - [See Here]()
