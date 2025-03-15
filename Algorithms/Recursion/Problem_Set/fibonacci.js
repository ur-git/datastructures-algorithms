// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

//recursion
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

//basic
function fib(n) {
  let first = 0;
  let second = 1;
  let arr = [1, 1];

  for (let i = 0; i < n; i++) {
    let num = arr[first] + arr[second];
    arr.push(num);

    first++;
    second++;
  }

  return arr[n - 1];
}

console.log(fib(10));
