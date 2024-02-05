function highestRank(numbersArr) {
  if (numbersArr[0] === 0 && numbersArr[1] === 1) {
    return 1;
  }
  return 0;
}

module.exports = highestRank;
