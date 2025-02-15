// Basic Hash function
function hash(key, arrayLength) {
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96; 
    total = (total + value) % arrayLength;
  }
  return total;
}

console.log(hash("pink", 10));
console.log(hash("red", 10));

//Refined Hash function
function hash(key, arrayLength) {
  let total = 0;
  let random_prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96; 
    total = (total * random_prime + value) % arrayLength;
  }
  return total;
}

console.log(hash("pink", 10));
console.log(hash("red", 10));
