// // Given an input str contaiing words sort all the words inside the given input. str on the basis of length and return the output in the ascending order.
// function sortStr(strData){
//     return strData.sort();
// }


// function strManipulation(sentenceStr){
//     let wordArr = sentenceStr.split(" ");
//     wordArr.sort();
//     console.log(wordArr);

//     const strObj = {};
//     wordArr.forEach(element => {
//         strObj[element]= element.length();
//     });
//     console.log(strObj);


// }

// strManipulation("i am a good developer");





// Sort Function
function sort(first,second){
    return sort((first,second)=>first-second);
}

// Split sentence function
function splitSentence(sentence){
    return sentence.split(" ");
}

// Sort sentence by length function
function sortSentenceByLength(inputStr) {
    // Split the sentence
    const words = splitSentence(inputStr);

    // Sort all the words
    words.sort();

    //Sort the sentence array
    const sortedWords = words.sort((a, b) => a.length - b.length);

    // Concatenate the array
    const sortedStr = sortedWords.join(' ');
    
    return sortedStr;
}
  
  const inputStr = "i am a good developer";
  const result = sortSentenceByLength(inputStr);
  console.log(result);
  