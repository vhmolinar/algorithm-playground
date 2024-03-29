validate(
  [12, 3, 1, 2, -6, 5, 0, -8, -1, 6, -5],
  0,
  [
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 0, 6],
    [-6, 1, 5],
    [-5, -1, 6],
    [-5, 0, 5],
    [-5, 2, 3],
    [-1, 0, 1]
  ]
);

function validate(array, targetSum, expectedOutput) {
  const res = threeNumberSum(array, targetSum)
  console.assert(JSON.stringify(res) == JSON.stringify(expectedOutput), "output differs")
}

function threeNumberSum(array, targetSum) {
  const triples = [];
  const calculatedTriples = {};
  for (let i = 0; i < array.length; i += 1) {
    const outerNumber = array[i];
    const sideTarget = targetSum - outerNumber;

    twoNumberSumList(array, sideTarget, i).forEach((twoNumbers) => {
      const triple = [ ...twoNumbers, outerNumber ];

      if (triple.length > 1) {
        const sorted = triple.sort((a, b) => a - b);

        if (!wasTripleCalculated(calculatedTriples, sorted)) {
          triples.push(sorted);
        }
      }
    });
  }

  triples.sort((t1, t2) => {
    for (let i = 0; i < 3; i += 1) {
      if (t1[i] != t2[i]) return t1[i] - t2[i];
    }
    return 1;
  });

  return triples;
}

function wasTripleCalculated(calculatedTriples, triple) {
  const hash = triple.join('-');
  if (calculatedTriples[hash]) {
    return true;
  }
  calculatedTriples[hash] = true;
  return false;
}

function twoNumberSumList(sampleArray, target, outerIdx) {
  const diffMap = {};
  const twoNumbersList = [];
  for (let j = 0; j < sampleArray.length; j += 1) {
    if (j == outerIdx) continue;
    const innerNumber = sampleArray[j];
    const diff = target <= 0
        ? target - innerNumber
        : target + (innerNumber * -1);

    // found two numbers
    if (diffMap[diff] != null) {
      const previousIdx = diffMap[diff];
      const previousNumber = sampleArray[previousIdx];
      twoNumbersList.push([innerNumber, previousNumber]);
    }

    diffMap[innerNumber] = j;
  }

  return twoNumbersList;
}
