function highestRank(numbersArr) {
  let countObj = createObjWithNumbersCount(numbersArr);
  let numbersCount = 0;
  let resultNumber = 0;
  for (const [key, value] of Object.entries(countObj)) {
    if (numbersCount <= value) {
      numbersCount = value;
      resultNumber = key;
    }
  }
  return Number(resultNumber);
}

function createObjWithNumbersCount(numbersArr) {
  let countObj = {};
  numbersArr.sort();
  for (let i = 0; i < numbersArr.length; i++) {
    if (numbersArr[i] in countObj) {
      countObj[numbersArr[i]] += 1;
    } else {
      countObj[numbersArr[i]] = 1;
    }
  }
  return countObj;
}

module.exports = highestRank;
