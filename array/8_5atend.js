const fiveAtEnd = (array) => {
  let i = 0;
  let j = array.length - 1;
  let temp = null;
  while (i <= j) {
    if (array[j] === 5) {
      j -= 1;
    } else if (array[i] === 5) {
      //   temp = array[i];
      //   array[i] = array[j];
      //   array[j] = temp;
      // OR
      [array[i], array[j]] = [array[j], array[i]];
      i += 1;
    } else {
      i += 1;
    }
  }
  return array;
};
const result = fiveAtEnd([1, 5, 3, 2, 8, 5, 9, 12, 5]);
console.log(result);
