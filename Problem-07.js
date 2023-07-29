function secondSmallestNumber(number) {
  const sortedNUmber = number.sort((a, b) => a - b);
  return sortedNUmber[1];
}
const numberArr = [5, 10, 23, 15, -3, 10];
const secondSmallNumber = secondSmallestNumber(numberArr);
console.log(secondSmallNumber);
