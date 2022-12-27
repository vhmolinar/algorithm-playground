// create an output array
// loop through the input array and for each element check
// if it is higher then each value of the output array from the higher (n - 1) to the lower (n - 2)
// if is higher than, replace the value and shift the output array
function findThreeLargestNumbers(array) {
  let output = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
  const n = 3;

  for (const value of array) {
    if (output[n - 1] < value) {
      output = [ output[n - 2], output[n - 1], value ];
    } else if (output[n - 2] < value) {
      output = [ output[n - 2], value, output[n - 1] ];
    } else if (output[n - 3] < value) {
      output = [ value, output[n - 2], output[n - 1] ];
    }
  }

  return output;
}

function validate(input, expectedOutput) {
  const res = findThreeLargestNumbers(input);
  console.assert(res.join('') == expectedOutput.join(''))
}

validate([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7], [18, 141, 541]);
validate([55, 7, 8], [7, 8, 55]);
