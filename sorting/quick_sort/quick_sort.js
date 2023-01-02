function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, left, right) {
  if (left >= right)
    return;

  let pivotPointer = left;
  let leftPointer = left + 1;
  let rightPointer = right;

  const pivot = array[pivotPointer];

  while (rightPointer >= leftPointer) {
    const leftValue = array[leftPointer];
    const rightValue = array[rightPointer];

    if (leftValue > pivot && rightValue < pivot) {
      array[leftPointer] = rightValue;
      array[rightPointer] = leftValue;
      rightPointer -= 1;
      leftPointer += 1;
    } else {
      if (leftValue <= pivot) {
        leftPointer += 1;
      }
      if (rightValue >= pivot) {
        rightPointer -=1;
      }
    }
  }

  const rightValue = array[rightPointer];
  array[rightPointer] = pivot;
  array[pivotPointer] = rightValue;
  pivotPointer = rightPointer;

  const leftSubIsSmaller = right - pivotPointer > pivotPointer;
  if (leftSubIsSmaller) {
    quickSortHelper(array, left, pivotPointer - 1);
    quickSortHelper(array, pivotPointer + 1, right);
  } else {
    quickSortHelper(array, pivotPointer + 1, right);
    quickSortHelper(array, left, pivotPointer - 1);
  }
}

function validate(input, expectedOutput) {
  quickSort(input);
  console.assert(input.join('') == expectedOutput.join(''), `Expected ${expectedOutput}. But got ${input}`);
}

validate(
  [2, -2, -6, -10, 10, 4, -8, -1, -8, -4, 7, -4, 0, 9, -9, 0, -9, -9, 8, 1, -4, 4, 8, 5, 1, 5, 0, 0, 2, -10],
  [-10, -10, -9, -9, -9, -8, -8, -6, -4, -4, -4, -2, -1, 0, 0, 0, 0, 1, 1,  2, 2, 4, 4, 5, 5, 7, 8, 8, 9, 10]
)

validate(
  [8, 5, 2, 9, 5, 6, 3],
  [2, 3, 5, 5, 6, 8, 9]
)
