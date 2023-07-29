function sumPositiveNumbers(numbers) {
  const positiveNumbers = numbers.filter((n) => n >= 0);
  const sumNumbers = positiveNumbers.reduce(
    (totalNumber, value) => totalNumber + value
  );
  return sumNumbers;
}
const numbers = [2, -5, 10, -3, 7];
const totalPositiveNumber = sumPositiveNumbers(numbers);
console.log(totalPositiveNumber); //19
