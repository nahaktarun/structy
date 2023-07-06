const intersection = (array1, array2) => {
  const result = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        result.push(array1[i]);
      }
    }
  }

  return result;
};
// time c = O(n*m)
// space = O(min(m, n))
const intersection2 = (array1, array2) => {
  const set = new Set();
  const result = [];

  for (let i of array1) {
    set.add(i);
  }

  for (let i of array2) {
    if (set.has(i)) {
      result.push(i);
    }
  }

  return result;
};
// time complexit : O(n+m)
// space complexity: O(n);

const result = intersection2([1, 2, 3, 4, 5], [7, 8, 3, 2, 8]);
console.log(result);
