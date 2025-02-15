# Hash Tables: Big O Complexity and Key Takeaways

## Time Complexity Analysis

### Insertion, Deletion, and Access

- **Best Case & Average Case:** \( O(1) \) (constant time)
  - Depends on the efficiency of the hash function.
  - A well-designed hash function minimizes collisions and distributes data evenly.
  - Programming languages with built-in hash table implementations optimize for constant time operations.
- **Worst Case:** \( O(n) \) (linear time)
  - Occurs when the hash function distributes all data to the same index.
  - This results in a degraded performance similar to an array, requiring linear time for insertions, deletions, and lookups.

### Searching

- **Searching by Key:** \( O(1) \) (constant time)
  - Hashing the key directly provides quick lookup access.
- **Searching by Value:** \( O(n) \) (linear time)
  - Requires scanning all key-value pairs since values are not directly indexed.

---

## Key Recap on Hash Tables

### Definition & Use Cases

- Hash tables store **key-value pairs**.
- Implemented in most programming languages:
  - Python: **Dictionaries**
  - JavaScript: **Maps, Objects**
  - Java: **HashMap**
  - Many other languages have built-in hash table implementations.
- Allows **fast retrieval, insertion, and deletion** using a key.

### How Hash Tables Work

1. A **hash function** converts a key into an index.
2. The value is stored at the computed index in an **array**.
3. A good hash function ensures **efficient distribution** and reduces collisions.

### Characteristics of a Good Hash Function

- **Fast execution** (\( O(1) \) ideally)
- **Uniform distribution** of keys
- **Deterministic** (same input produces the same output)
- **Minimizes collisions** to improve efficiency

### Collision Resolution Strategies

- **Separate Chaining** (Used in our implementation)
  - Multiple values stored in a nested structure (e.g., linked list) at the same index.
- **Linear Probing**
  - If a collision occurs, search forward for the next available slot.

### Final Thoughts

- Our hash function was a **basic educational example**, not optimized for real-world applications.
- In practice, use **well-tested** hash functions from standard libraries.
- **Hash tables are fundamental** for storing key-value pairs efficiently.
- Widely used in databases, caching systems, and data structures like sets and dictionaries.

Hash tables are one of the most **powerful and commonly used** data structures in computer science!
