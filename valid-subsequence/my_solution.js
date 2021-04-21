function isValidSubsequence(array, sequence) {
  if (array.length < sequence.length) {
    return false;
  }

  const setOfArray = new Set(array);
  const setOfFoundPositions = new Set();
  const mapOfPositions = {};

  let anyUnmatch = false;
  for (let i=0; i < sequence.length; i += 1) {
    const numberInSubsequence = sequence[i];

    if (!setOfArray.has(numberInSubsequence)) {
      anyUnmatch = true;
      break;
    }

    let firstOcurrencyIndex = null;
    let queryOffset = 0;
    do {
      firstOcurrencyIndex = array.indexOf(numberInSubsequence, queryOffset);
      queryOffset += 1;
    } while (setOfFoundPositions.has(firstOcurrencyIndex));
    
    setOfFoundPositions.add(firstOcurrencyIndex);
    mapOfPositions[i] = firstOcurrencyIndex;

    if (i !== 0) {
      const previousValueIndex = mapOfPositions[i - 1];
      if (previousValueIndex >= firstOcurrencyIndex) {
        anyUnmatch = true;
        break;
      }
    }
  }

  return !anyUnmatch;
}

function test(input) {
    console.log(isValidSubsequence(input.array, input.sequence));
}

test({
    "array": [1, 1, 6, 1],
    "sequence": [1, 1, 1, 6]
  });