function highestRank(numbersArr) {
  let countObj = {};
  numbersArr.sort();
  for (let i = 0; i < numbersArr.length; i++) {
    console.log('i: ', i);
    console.log('numbersArr[i]: ', numbersArr[i]);
    if (numbersArr[i] in countObj) {
      countObj[numbersArr[i]] += 1;
    } else {
      countObj[numbersArr[i]] = 1;
    }
  }

  console.log('countObj: ', countObj);
  let numbersCount = 0;
  let resultNumber = 0;
  for (const [key, value] of Object.entries(countObj)) {
    console.log(key);
    console.log(value);
    if (numbersCount <= value) {
      numbersCount = value;
      resultNumber = key;
    }
    console.log('numbersCount: ', numbersCount);
    console.log('resultNumber: ', resultNumber);
  }
  return Number(resultNumber);
}

module.exports = highestRank;
