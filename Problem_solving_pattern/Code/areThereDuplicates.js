// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
function areThereDuplicates(...args) {
  let freqCounter = {};
  for (let i = 0; i < args.length; i++) {
    freqCounter[args[i]] = (freqCounter[args[i]] || 0) + 1;
  }

  console.log(freqCounter);
  for (let key in freqCounter) {
    if (freqCounter[key] > 1) {
      return true;
    }
  }

  return false;
}

// One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
