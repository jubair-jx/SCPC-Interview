function romanNumberToInteger(str) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;
  for (let i = 0; i < str.length; i++) {
    const current = romanNumerals[str[i]];
    const next = i < str.length - 1 ? romanNumerals[str[i + 1]] : 0;

    if (current >= next) {
      value += current;
    } else {
      value -= current;
    }
  }

  return value;
}
const integerNumber = romanNumberToInteger("XXI"); //21
console.log(integerNumber);
