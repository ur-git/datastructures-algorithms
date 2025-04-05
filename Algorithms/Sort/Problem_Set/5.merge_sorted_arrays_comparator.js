function stringLengthComparator(str1, str2) {
  return str1.length - str2.length;
}

function merge(
  arr1,
  arr2,
  stringLengthComparator = (a, b) => (a < b ? -1 : 1)
) {
  let mergedArray = [];
  let left = 0;
  let right = 0;

  while (left < arr1.length && right < arr2.length) {
    if (stringLengthComparator(arr1[left], arr2[right]) <= 0) {
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

console.log(merge([1, 3, 4, 5], [2, 4, 6, 8])); // [1,2,3,4,4,5,6,8]
console.log(merge([-2, -1, 0, 4, 5, 6], [-3, -2, -1, 2, 3, 5, 7, 8])); // [-3,-2,-2,-1,-1,0,2,3,4,5,5,6,7,8]
console.log(
  merge(
    ["Bob", "Ethel", "Christine"],
    ["M", "Colt", "Allison", "SuperLongNameOMG"],
    stringLengthComparator
  )
); // ["M", "Bob", "Colt", "Ethel", "Allison", "Christine", "SuperLongNameOMG"]
