function rangeOfNumbers(startNum, endNum) {
  return startNum > endNum
    ? []
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}
