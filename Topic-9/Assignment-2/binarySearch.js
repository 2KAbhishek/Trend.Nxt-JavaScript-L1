let arr = [2, 4, 6, 13, 15, 17, 21, 22, 23, 26, 27, 29, 31, 32, 35];
function binarySearch(sortedArray) {
  let key = parseInt(prompt("Enter element to search for: "));
  let start = 0;
  let end = sortedArray.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (sortedArray[middle] === key) {
      // found the key
      return middle;
    } else if (sortedArray[middle] < key) {
      // continue searching to the right
      start = middle + 1;
    } else {
      // search searching to the left
      end = middle - 1;
    }
  }
  // key wasn't found
  return -1;
}

let res = binarySearch(arr);

if (res === -1) {
  document.write("Element not found: " + res);
} else {
  document.write("Element found: " + res);
}
