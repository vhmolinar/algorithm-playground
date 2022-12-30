function shiftedBinarySearch(array, target) {
  let { start, end } = detectRange(array, target);

  while (end >= start) {
    const midIdx = Math.floor((start + end) / 2);
    const midValue = array[midIdx];
    if (midValue == target) {
      return midIdx;
    } else if (midValue > target) {
      end = midIdx - 1;
    } else {
      start = midIdx + 1;
    }
  }

  return -1;
}

function detectRange(array, target) {
  let start = 0;
  let end = array.length - 1;
  const mid = Math.floor((start + end) / 2);
  const midValue = array[mid];

  const firstValue = array[start];
  const lastValue = array[end];

  const notShifted = firstValue < lastValue;

  if (target == midValue) {
    start = mid;
    end = mid;
  } else if (target == firstValue) {
    end = start;
  } else if (target == lastValue) {
    start = end;
  } else if (notShifted && midValue > target) {
    end = mid -1;
  } else if (notShifted && midValue < target) {
    start = mid + 1;
  } else if (
    (
      target > midValue
      &&
      target < lastValue
    )
    ||
    (
      (midValue > firstValue && midValue > lastValue)
          &&
      (
        (
          target > firstValue
          &&
          target > midValue
        )
        ||
        (
          target < lastValue
          &&
          target < midValue
        )
      )
    )
  ) {
    start = mid + 1;
    end = end - 1;
  } else {
    start = 1;
    end = mid - 1;
  }

  return { start, end };
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
