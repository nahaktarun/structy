const uncompress = (s) => {
  let numbers = "0123456789";
  let result = [];
  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const num = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        result.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  return result.join("");
};

const result = uncompress("4s2b");
console.log(result);
console.log("hi");
