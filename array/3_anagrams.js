const anagram = (string1, string2) => {
  let result1 = {};

  for (let char of string1) {
    if (!(char in result1)) {
      result1[char] = 0;
    }
    result1[char] += 1;
  }

  for (let char of string2) {
    if (char in result1) {
      result1[char] -= 1;
    } else {
      return false;
    }
  }

  for (let char in result1) {
    if (result1[char] !== 0) {
      return false;
    }
  }
  return true;
};

const result = anagram("anagram", "nagaram");
console.log(result);
