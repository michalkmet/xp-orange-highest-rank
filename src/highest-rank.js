function highestRank(numbersArr) {
  let result = 0;
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
  return result;
}

module.exports = highestRank;
