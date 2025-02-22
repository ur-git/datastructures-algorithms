// Write a function `sumZero` that accepts a sorted array of integers. The function should find the first pair where the sum is zero and return it as an array. If no such pair exists, return `undefined`.
// | Left Pointer | Right Pointer | Sum | Action                 |
// | ------------ | ------------- | --- | ---------------------- |
// | -4 (0)       | 5 (7)         | 1   | Decrease `right`       |
// | -4 (0)       | 2 (6)         | -2  | Increase `left`        |
// | -3 (1)       | 2 (6)         | -1  | Increase `left`        |
// | -2 (2)       | 2 (6)         | 0   | Found! Return `[-2,2]` |

function sumZero(arr, addValue) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[right] + arr[left];

    if (sum === addValue) {
      return [arr[right], arr[left]];
    } else if (sum > addValue) {
      right--;
    } else if (sum < addValue) {
      left++;
    }
  }

  return undefined;
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5], 1));
