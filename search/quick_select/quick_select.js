function quickselect(array, k) {
  const kth = k - 1;
  return quickselectHelper(array, kth, 0, array.length - 1);
}

function quickselectHelper(array, kth, left, right) {
  while (true) {
    if (left > right) {
      throw new Error("Not found")
    }

    let pivotPointer = left;
    let leftPointer = left + 1;
    let rightPointer = right;

    const pivot = array[pivotPointer];

    while (rightPointer >= leftPointer) {
      const leftValue = array[leftPointer];
      const rightValue = array[rightPointer];

      if (leftValue > pivot && rightValue < pivot) {
        swap(leftPointer, rightPointer, array);
        leftPointer += 1;
        rightPointer -= 1;
      } else {
        if (leftValue <= pivot) {
          leftPointer += 1;
        }
        if (rightValue >= pivot) {
          rightPointer -= 1;
        }
      }
    }

    swap(pivotPointer, rightPointer, array);

    if (rightPointer === kth) {
      return array[kth];
    } else if (rightPointer > kth) {
      right = rightPointer - 1;
    } else {
      left = rightPointer + 1;
    }
  }
}

function swap(i, j, array) {
  const iValue = array[i];
  const jValue = array[j];
  array[i] = jValue;
  array[j] = iValue;
}

function validate(array, k, expected) {
  const actual = quickselect(array, k);
  console.assert(actual === expected, `Expected ${expected}. But got ${actual}`);
}


validate(
  [8, 5, 2, 9, 7, 6, 3],
  3,
  5
)
