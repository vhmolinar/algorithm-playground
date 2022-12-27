// as the array is ascending order
// calc the mid position of the array
// compare the element at the mid position with the target
// repeat until mid position is 0 or the element is found
// otherwise return -1
function binarySearch(array, target) {
  let start = 0;
  let end = array.length;
  do {
    const midPos = Math.floor((end + start) / 2);

    if (array[midPos] == target)  {
      return midPos;
    } else if (array[midPos] > target) {
      if (midPos == end)
        break;
      end = midPos;
    } else {
      if (midPos == start)
        break;
      start = midPos;
    }
  } while (end - start >= 1);

  return -1;
}
