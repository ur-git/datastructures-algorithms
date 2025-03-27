function merge(arr1, arr2) {
  let mergedArray = [];
  let left = 0;
  let right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      mergedArray.push(arr1[left]);
      left++;
    } else {
      mergedArray.push(arr2[right]);
      right++;
    }
  }

  while (left < arr1.length) {
    mergedArray.push(arr1[left]);
    left++;
  }

  while (right < arr2.length) {
    mergedArray.push(arr2[right]);
    right++;
  }

  return mergedArray;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(mergeSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]
console.log(mergeSort([]));
