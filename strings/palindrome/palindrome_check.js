// create two pointers, one at the index 0 (left) and another at last (right)
// iterate from 0 untill length(array) / 2 (rounded up)
// for each iteration compare chars that each pointer is looking
// if they are not the same return false
// or else increment left pointer and decrement right pointer
function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;
  let iterations = Math.round(string.length / 2);

  for (let i = 0; i < iterations; i += 1) {
    if (string[left] !== string[right]) {
      return false;
    }
    left += 1;
    right -= 1;
  }
  return true;
}

function validate(string, expected) {
  const actual = isPalindrome(string);
  console.assert(actual === expected, `Expected ${expected}. But got ${actual}`);
}

validate('abcdcba', true)
