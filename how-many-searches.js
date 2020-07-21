// How many searches?
// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 8.

let searchItems = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];
// Answer - The binary search algorithm will first find 12, then 6 and then 8. Making a total of 3 steps

// Given a sorted list 3, 5, 6, 8, 11, 12, 14, 15, 17, 18 and using the recursive binary search algorithm, identify the sequence of numbers that each recursive call will search to try and find 16.
// Answer - Since 16 is not in the array, it will search everything in this order:
//  12, 17, 14, 15 and returns -1

// Test implementation
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];
  console.log(`Just found ${item}`);
  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

// test the first question
// console.log(binarySearch(searchItems, 8, 0, searchItems.length));

// test the second question
console.log(binarySearch(searchItems, 16, 0, searchItems.length));
