# Quicksort Algorithm 

## Overview

Quicksort is a **divide-and-conquer**, **comparison-based**, and **recursive** sorting algorithm that efficiently sorts elements by repeatedly **partitioning the array** around a chosen element called the **pivot**.



---

## Core Concepts

### 1. Pivot
- An element around which the array is **partitioned**.
- **Goal:** Place pivot in the **correct sorted position**, so that:
  - All elements **left of pivot** are **less than** it
  - All elements **right of pivot** are **greater than** it

### 2. Partitioning Process (Pivot Helper)
- Rearranges elements such that:
  - Values < pivot move to the left
  - Values > pivot move to the right
- Returns the **final pivot index**

---

## Quicksort Flow (High-Level)

1. Pick a pivot (typically the **first** element).
2. Call the **pivot helper** to:
   - Reorganize array based on pivot
   - Return pivot's correct position
3. Recursively apply quicksort on:
   - Subarray to the left of pivot
   - Subarray to the right of pivot

---

