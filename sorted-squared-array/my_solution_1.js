function sortedSquaredArray(array) {
  return array.map((e) => Math.pow(e, 2)).sort((a, b) => a - b);
}

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));