function isValidSubsequence(array, sequence) {
  let j = 0;
  for (let i = 0; i < array.length; i +=1) {
    if (array[i] == sequence[j])
      j += 1;
  }
  return j == sequence.length;
}

