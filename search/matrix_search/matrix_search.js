
// time -> O(nlogm)
// space -> O(1)
function searchInSortedMatrix(matrix, target) {
  for (let iRow = 0; iRow < matrix.length; iRow += 1) {
    const row = matrix[iRow];
    const firstColumn = row[0];

    if (firstColumn > target)
      break;
    else if (firstColumn == target)
      return [iRow, 0];

    const targetColumn = findTargetColumn(row, target);
    if (targetColumn) {
      return [iRow, targetColumn];
    }
  }
  return [-1, -1];
}

function findTargetColumn(row, target) {
  let start = 0;
  let end = row.length - 1;

  while (end >= start) {
    const mid = Math.floor((start + end) / 2);
    const value = row[mid];

    if (value == target)
      return mid;
    else if (value < target)
      start = mid + 1;
    else
      end = mid - 1;
  }

  return null;
}

const res = searchInSortedMatrix(
  [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004]
  ],
  44
);

console.assert(res.join('') == [3, 3].join(''))
