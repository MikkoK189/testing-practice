class Analyzed {
  constructor(average = 0, min = 0, max = 0, length = 0) {
    this.average = average;
    this.min = min;
    this.max = max;
    this.length = length;
  }
}

function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function getMin(arr) {
  return Math.min(...arr);
}

function getMax(arr) {
  return Math.max(...arr);
}

function analyzeArray(arr) {
  const analyzedArray = new Analyzed(0, 0, 0, arr.length);
  analyzedArray.average = getAverage(arr);
  analyzedArray.min = getMin(arr);
  analyzedArray.max = getMax(arr);

  return analyzedArray;
}

export { analyzeArray };
