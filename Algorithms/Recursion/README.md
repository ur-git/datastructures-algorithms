# Recursion in JavaScript

## Definition of Recursion

Recursion is a process in which a function calls itself. In programming, when we talk about recursion, we typically mean a **function that calls itself** within its definition.

## Importance of Recursion

### Why Should You Care?

1. **Recursion is Everywhere**

   - Many built-in JavaScript operations use recursion.
   - You may have used recursive functions unknowingly, such as:
     - `JSON.parse()` and `JSON.stringify()`
     - DOM traversal (`document.getElementById`, `querySelector`)
     - Object and data structure traversal

2. **Recursive Solutions Are Common in Advanced Data Structures**

   - Recursion is frequently used for:
     - Tree and graph traversal
     - Searching and sorting algorithms (e.g., quicksort, mergesort)
     - Writing parsers (e.g., JSON parsing)

3. **Sometimes Recursion is Simpler than Iteration**
   - Certain problems are more naturally expressed recursively.
   - Recursion can lead to **cleaner and more readable code** compared to iterative solutions.

## Example: Recursive JSON Parsing

JSON parsing can be implemented recursively. Although browsers implement JSON parsing in lower-level languages, the logic can be represented in JavaScript as follows:

```js
function walk(node) {
  if (typeof node !== "object" || node === null) return;
  for (let key in node) {
    console.log(`Processing key: ${key}`);
    walk(node[key]);
  }
}

const jsonString =
  '{ "name": "Alice", "info": { "age": 25, "city": "New York" } }';
const jsonObject = JSON.parse(jsonString);
walk(jsonObject);
```

Here, `walk()` recursively processes nested objects until it reaches primitive values.

## Recursive vs. Iterative Approach

Some problems can be solved using both recursion and iteration. Recursion can sometimes be more intuitive but might lead to stack overflow if not handled properly.

### Factorial Example (Recursive vs. Iterative)

#### Recursive Approach

```js
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
```

#### Iterative Approach

```js
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

Both solutions work, but recursion follows the **mathematical definition** more closely.

## [Recursive Pattern Examples](./Problem_Set/)

