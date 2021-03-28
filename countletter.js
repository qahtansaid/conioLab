function countLetter(input) {
  let maxCount = 0;
  for (let i = 0; i < input.length; i++) {
    let reg = new RegExp(input[i], "g");
    let len = input.match(reg).length;
    if (maxCount < len) {
      maxCount = len;
    }
  }
  return console.log("max count : ", maxCount);
}
countLetter("randomrize");
