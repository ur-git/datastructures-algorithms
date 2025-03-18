// HashMap-based approach.This reduces unnecessary memory usage while allowing quick lookups.
function longestUniqueSubstring(s) {
  let charIndexMap = {}; // Stores the last seen index of each character
  let left = 0,
    maxLength = 0,
    start = 0;

  for (let right = 0; right < s.length; right++) {
    if (
      charIndexMap[s[right]] !== undefined &&
      charIndexMap[s[right]] >= left
    ) {
      left = charIndexMap[s[right]] + 1; // Move left to exclude duplicate
    }

    charIndexMap[s[right]] = right; // Update character's latest index

    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      start = left; // Store start index of longest substring
    }
  }

  let longestSubstring = s.slice(start, start + maxLength);
  return { maxLength, longestSubstring };
}

// SET-based approach
function longestUniqueSubstring(s) {
  let set = new Set();
  let left = 0,
    maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(longestUniqueSubstring("hellothere"));
console.log(longestUniqueSubstring("abcabcbb"));
