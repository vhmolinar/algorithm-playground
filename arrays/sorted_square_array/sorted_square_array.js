
function sortedSquaredArray(array) {
  const sortedArray = new Array(array.length).fill(0);
  let smallerIdx = 0;
  let greaterIdx = array.length - 1;

  for (let i= array.length -1; i >= 0; i -= 1) {
    const smallerValue = array[smallerIdx];
    const greaterValue = array[greaterIdx];

    if (Math.abs(smallerValue) > Math.abs(greaterValue)) {
      sortedArray[i] = smallerValue ** 2;
      smallerIdx += 1;
    } else {
      sortedArray[i] = greaterValue ** 2;
      greaterIdx -= 1;
    }
    console.log(sortedArray)
  }

  return sortedArray;
}

console.log(sortedSquaredArray([-2, 1, 3, 5, 6, 8, 9]));
