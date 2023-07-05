var compress = function (chars) {
  let result = "";
  let i = 0;
  let j = 0;
  while (j <= chars.length) {
    if (chars[i] === chars[j]) {
      j += 1;
    } else {
      let count = j - i;
      result = result + count + chars[i];
      i = j;
    }
  }
  return result.split("");
};
const result = compress("ccaaatssss");
console.log(result);
