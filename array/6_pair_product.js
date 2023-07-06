const pairProduct = (array, target) => {
  let previous = {};

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    const complement = target / num;
    if (complement in previous) {
      return [i, previous[complement]];
    }
    previous[num] = i;
  }
};

const result = pairProduct([2, 3, 6, 4, 5, 1], 20);

console.log(result);
