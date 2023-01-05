function runLengthEncoding(string) {
  let runLength = '';
  let currentChar = null;
  let currentCount = 0;

  for (let i = 0; i < string.length; i += 1) {
    const charAt = string[i];
    if (currentChar !== charAt) {
      if (currentChar !== null && currentCount !== 0) {
        runLength += `${currentCount}${currentChar}`
      }

      currentCount = 0;
      currentChar = charAt;
    }

    currentCount += 1;

    if (currentCount === 9) {
      runLength += `${currentCount}${currentChar}`
      currentCount = 0;
    }
  }
  if (currentCount !== 0)
    runLength += `${currentCount}${currentChar}`

  return runLength;
}


function validate(string, expected) {
  const actual = runLengthEncoding(string);
  console.assert(actual === expected, `Expected ${expected}. But got ${actual}`);
}

validate('AAAAAAAAAAAAABBCCCCDD', '9A4A2B4C2D')
validate('aA', '1a1A')
validate('************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA', '9*3*7^6$7%6!9A9A2A')
