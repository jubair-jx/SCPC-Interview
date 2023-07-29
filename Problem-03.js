function findMostFrequentNumber(arr) {
  const frequency = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    frequency[num] = (frequency[num] || 0) + 1;
  }
  let mostFrequentNum;
  let maxFrequency = 0;
  for (const num in frequency) {
    if (frequency[num] > maxFrequency) {
      mostFrequentNum = num;
      maxFrequency = frequency[num];
    }
  }

  return mostFrequentNum;
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const mostFrequentNumber = findMostFrequentNumber(array);
console.log("The most frequent number is:", mostFrequentNumber);
