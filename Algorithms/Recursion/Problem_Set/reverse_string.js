// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

//recursion
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

//built-in JS method
function reverse(str) {
  return str.split("").reverse().join("");
}

//basic
function reverse(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
