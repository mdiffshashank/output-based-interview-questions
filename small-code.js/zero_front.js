/**
 * push all zeros to front without using in bilt function
 * [1,0,0,1,1,1,0,0,1,0,1,1,0,0,1]
 */

function zerosAtFront(arr) {
  let count = arr.length - 1; //last
  // If the element is non-zero, place it at the 'count' index and decrement 'count'
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count--;
    }
  }
  // Fill the beginning of the array with zeros
  while (count >= 0) {
    arr[count] = 0;
    count--;
  }
  return arr;
}

console.log(zerosAtFront([1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1]));
