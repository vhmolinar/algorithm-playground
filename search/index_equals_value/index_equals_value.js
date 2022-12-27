function indexEqualsValue(array) {
  const midIdx = Math.floor((array.length - 1) / 2);
  const midValue = array[midIdx];

  let start = null;
  let end = null;

  if (midValue < midIdx) {
    start = midIdx;
    end = array.length;
  } else {
    start = 0;
    end = midIdx + 1;
  }

  for (let i = start; i < end; i += 1) {
    if (i == array[i])
      return i;
  }

  return -1;
}

function validate(input, expectedOutput) {
  const res = indexEqualsValue(input);
  console.assert(res == expectedOutput)
}

validate([-5, -3, 0, 3, 4, 5, 9], 3);
validate([-12, 1, 2, 3, 12], 1);
