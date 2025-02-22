// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

// | Step | `i` | `arr[i]` | `addTarget = arr[i] + num` | `subTarget = arr[i] - num` | Check `hashTable[addTarget]` or `hashTable[subTarget]` | Action |
// |------|----|--------|----------------|----------------|--------------------------------|---------|
// | 1  | 0  | 6  | 8  | 4  | **No match** | Store `6` in `hashTable` |
// | 2  | 1  | 1  | 3  | -1 | **No match** | Store `1` in `hashTable` |
// | 3  | 2  | 4  | 6  | 2  | ✅ `hashTable[6]` exists! | **Return `true`** |

function findPair(arr, num) {
  if (arr.length < 2) return false;

  let set = new Set();

  for (let val of arr) {
    if (set.has(val + num) || set.has(val - num)) {
      return true;
    }
    set.add(val);
  }

  return false;
}

function findPair(arr, num) {
  if (arr.length < 2) return false;

  let hashTable = {}; // Object as a hash table

  for (let i = 0; i < arr.length; i++) {
    let addTarget = arr[i] + num; // Target if num is positive
    let subTarget = arr[i] - num; // Target if num is negative

    // Manually check if targets exist in the hashTable
    if (
      hashTable[addTarget] !== undefined ||
      hashTable[subTarget] !== undefined
    ) {
      return true;
    }

    // Manually insert value into hashTable
    hashTable[arr[i]] = i;
  }

  return false;
}

// Test Cases
console.log(findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(findPair([4, -2, 3, 10], -6)); // true
console.log(findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(findPair([], 0)); // false
console.log(findPair([5, 5], 0)); // true
console.log(findPair([-4, 4], -8)); // true
console.log(findPair([-4, 4], 8)); // true
console.log(findPair([1, 3, 4, 6], -2)); // true
console.log(findPair([0, 1, 3, 4, 6], -2)); // true
