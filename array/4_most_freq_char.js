const mostFreqChar = (string) => {
  let count = {};

  for (let char of string) {
    if (!(char in count)) {
      count[char] = 1;
    } else {
      count[char] += 1;
    }
  }

  let mostfreqchar = null;
  for (let char of string) {
    if (mostfreqchar === null || count[char] > count[mostfreqchar]) {
      mostfreqchar = char;
    }
  }

  return mostfreqchar;
};

const result = mostFreqChar("potato");
console.log(result);
