function maxSubsetSumNoAdjacent(array) {
  if (array.length === 0)  {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }

  const progressiveSum = [];
  for (let i = 0; i < array.length; i += 1) {
    progressiveSum[i] = array[i];

    if (i === 2) {
      progressiveSum[i] += progressiveSum[0]
    } else if (i >= 3) {
      progressiveSum[i] += Math.max(progressiveSum[i - 2], progressiveSum[i - 3])
    }
  }

  return Math.max(
    progressiveSum[progressiveSum.length - 2],
    progressiveSum[progressiveSum.length - 1]
  );
}

function validate(array, expected) {
  const actual = maxSubsetSumNoAdjacent(array);
  console.assert(actual === expected, `Expected ${expected}. But got ${actual}`);
}


validate(
  [75, 105, 120, 75, 90, 135],
  330
)
