const pairSum = (array, target) => {
  const previous = {};
  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    if (!(complement in previous)) {
      previous[array[i]] = i;
    } else {
      return [previous[complement], i];
    }
  }
  return -1;
};

const result = pairSum([3, 2, 5, 6, 1], 15);
console.log(result);
