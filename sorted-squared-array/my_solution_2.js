function insertInAscOrder(array, insertionValue) {
  if (array.length === 0) {
    array.push(insertionValue);
    return;
  }

  let insertionIdx = 0;
  for (insertionIdx = 0; insertionIdx < array.length; insertionIdx += 1) {
    const valueAtIdx = array[insertionIdx];
    if (valueAtIdx > insertionValue) {
      break;
    }
  }

  let shiftIdx = array.length;
  while (shiftIdx > insertionIdx) {
    array[shiftIdx] = array[shiftIdx - 1];
    shiftIdx -= 1;
  }

  array[insertionIdx] = insertionValue;
}

function sortedSquaredArrayv1(array) {
  const sortedSquaredArray = [];
  for (const element of array) {
    const squared = Math.pow(element, 2);
    insertInAscOrder(sortedSquaredArray, squared);
  }
  return sortedSquaredArray;
}

function sortedSquaredArray(array) {
  const sortedSquaredArray = [];
  for (const element of array) {
    const squared = Math.pow(element, 2);
    insertInAscOrder(sortedSquaredArray, squared);
  }
  return sortedSquaredArray;
}


console.log(sortedSquaredArray([3, -10, 2, -5, 0, 5, 10, 1]));