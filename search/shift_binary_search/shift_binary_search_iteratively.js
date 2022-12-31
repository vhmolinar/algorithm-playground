function shiftedBinarySearch(array, target) {
  return shiftedBinarySearchIteratively(array, target, 0, array.length - 1);
}

function shiftedBinarySearchIteratively(array, target, left, right) {
  if (left > right)
    return -1;

  const mid = Math.floor((left + right) / 2);
  const midValue = array[mid];

  const leftValue = array[left];
  const rightValue = array[right];

  if (midValue === target) {
    return mid;
  } else if (leftValue < midValue) {
    if (target >= leftValue && target <= midValue) {
      return shiftedBinarySearchIteratively(array, target, left, mid - 1);
    } else {
      return shiftedBinarySearchIteratively(array, target, mid + 1, right);
    }
  } else {
    if (target <= rightValue && target >= midValue) {
      return shiftedBinarySearchIteratively(array, target, mid + 1, right);
    } else {
      return shiftedBinarySearchIteratively(array, target, left, mid - 1);
    }
  }
}


function validate(input, target, expectedOutput) {
  const actualOutput = shiftedBinarySearch(input, target);
  console.assert(expectedOutput == actualOutput);
}

validate(
  [71, 72, 73, 0, 1, 21, 33, 37, 45, 61],
  73,
  2
);

validate(
  [5, 23, 111, 1],
  111,
  2
);

validate(
  [45, 61, 71, 72, 73, 0, 1, 21, 33, 37],
  33,
  8
);
