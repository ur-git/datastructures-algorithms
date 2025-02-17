// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Test Case
// subject should_account_for_duplicates
// subject should_return_true_for_empty_message
// subject should_return_false_for_empty_letters_string
// subject should_return_true_if_all_letters_contained
// subject should_handle_large_cases

function constructNote(message, letters) {
  let frequency = {};
  let frequencyM = {};

  for (let i = 0; i < letters.length; i++) {
    frequency[letters[i]] = ++frequency[letters[i]] || 1;
  }

  for (let i = 0; i < message.length; i++) {
    frequencyM[message[i]] = ++frequencyM[message[i]] || 1;
  }

  for (let key in frequencyM) {
    if (!frequency[key]) {
      return false;
    }

    if (frequencyM[key] !== frequency[key]) {
      return false;
    }
  }

  return true;
}

console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff")); // true
