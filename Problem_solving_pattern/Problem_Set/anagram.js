// That takes two strings and it returns true if the strings are anagrams of one another.
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase
function anagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  let freqCounter1 = {};

  for (let i = 0; i < str1.length; i++) {
    //if letter exist, increment, otherwise set to 1
    freqCounter1[str1[i]] = (freqCounter1[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    //can't find letter or letter is 0, then not a anagram
    if (!freqCounter1[str2[i]]) {
      return false;
    } else {
      freqCounter1[str2[i]] = freqCounter1[str2[i]] - 1;
    }
  }
  return true;
}

console.log(anagrams("", ""));
console.log(anagrams("aaz", "zaa"));
console.log(anagrams("awesome", "awesom"));
console.log(anagrams("anagram", "nagaram"));
