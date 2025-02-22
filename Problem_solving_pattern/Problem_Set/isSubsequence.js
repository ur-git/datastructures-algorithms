// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// | Step | `i` | `j` | `str1[i]` | `str2[j]` | Comparison | Action |
// |------|----|----|------|------|------------|---------|
// | 1  | 0  | 0  | `'a'`  | `'a'`  | Match  | `i++ → 1` |
// | 2  | 1  | 1  | `'b'`  | `'b'`  | Match  | `i++ → 2` |
// | 3  | 2  | 2  | `'c'`  | `'r'`  | No match  | `j++ → 3` |
// | 4  | 2  | 3  | `'c'`  | `'a'`  | No match  | `j++ → 4` |
// | 5  | 2  | 4  | `'c'`  | `'c'`  | Match  | `i++ → 3` |
// | 6  | 3  | 5  | `-` (End of `str1`)  | `'a'`  | - | Return `true` |

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }

    if (i === str1.length) return true;
    j++;
  }

  return false;
}

console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "acb")); // false
