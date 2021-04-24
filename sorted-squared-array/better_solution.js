function sortedSquaredArray(array) {
  const sortedArray = [];
  let smallerIdx = 0;
  let greaterIdx = array.length - 1;

  for (let i=0; i < array.length; i += 1) {
    const smallerValue = array[smallerIdx];
    const greaterValue = array[greaterIdx];

    if (Math.abs(smallerValue) < Math.abs(greaterValue)) {
      sortedArray[i] = Math.pow(smallerValue, 2);
      smallerIdx += 1;
    } else {
      sortedArray[i] = Math.pow(greaterValue, 2);
      greaterIdx -= 1;
    }
  }

  return sortedArray;
}


console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));