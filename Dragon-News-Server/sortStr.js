// Split sentence function
function splitSentence(sentence) {
  return sentence.split(" ");
}

function sortWord(str) {
  let splitStr = str.split("");
  return splitStr.sort().join("");
}

// Sort sentence by length function
function sortSentenceByLength(inputStr) {
  // Split the sentence
  const words = splitSentence(inputStr);
  const allSortedWord = [];
  words.forEach((data) => {
    let ans = sortWord(data);
    allSortedWord.push(ans);
  });
  //Sort the sentence array
  const sortedWords = allSortedWord.sort((a, b) => a.length - b.length);
  // Concatenate the array
  const sortedStr = sortedWords.join(" ");
  return sortedStr;
}

const inputStr = "123";
const result = sortSentenceByLength(inputStr);
console.log(result);
