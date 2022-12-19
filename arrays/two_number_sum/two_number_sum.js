// [3, 5, -4, 8, 11, 1, -1, 6]
// 10
function twoNumberSum(array, targetSum) {
  const set = new Set();
  for (let i = 0; i < array.length; i += 1) {
    const number = array[i];
    const diff = targetSum - number;

    if (set.has(diff)) {
      return [ number, diff ];
    }

    set.add(number);
  }

  return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
