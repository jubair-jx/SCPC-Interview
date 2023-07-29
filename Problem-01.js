function reversedSentence(str) {
  const splitStr = str.split(" ");
  const wordReversedStr = [];
  for (let i = splitStr.length - 1; i >= 0; i--) {
    const splitWord = splitStr[i].split("");
    const reversedWord = [];
    for (let i = splitWord.length - 1; i >= 0; i--) {
      reversedWord.push(splitWord[i]);
    }
    wordReversedStr.push(reversedWord.join(""));
  }
  return wordReversedStr.join(" ");
}
const text = "hello world";
const reversed = reversedSentence(text);
console.log(reversed);
