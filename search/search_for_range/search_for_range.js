// using binary search calc mid position until you find the target
//
// once found, set left and right equals to mid and
// decrement left pointer and increment right pointer
// until the values are not euqla to the target anymore
//
// return the array of [left + 1, right -1]
// or [-1,-1] if the target is never found
function searchForRange(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midValue = array[mid];

    if (midValue > target) {
      right = mid - 1;
    } else if (midValue < target) {
      left = mid + 1;
    } else {
      return calcRange(mid, array, target);
    }
  }

  return [-1, -1];
}

function calcRange(mid, array, target) {
  let left = mid - 1;
  let right = mid + 1;
  let leftValue = array[left];
  let rightValue = array[right];

  while (true) {
    if (leftValue === target) {
      left -=1;
      leftValue = array[left];
    }
    if (rightValue === target) {
      right +=1;
      rightValue = array[right];
    }

    if (leftValue !== target && rightValue !== target) {
      break;
    }
  }
  return [left + 1, right - 1];
}
