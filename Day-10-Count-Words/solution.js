//Method 1: Using Built-in Methods
function countWords(sentence) {
    return sentence.trim().split(" ").length;
}

console.log(countWords("JavaScript is fun"));
console.log(countWords("I love coding"));

//Method 2: Without Using split()
function countWords(sentence) {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " " && !inWord) {
            count++;
            inWord = true;
        } else if (sentence[i] === " ") {
            inWord = false;
        }
    }

    return count;
}

console.log(countWords("JavaScript is fun"));
console.log(countWords("I love coding"));
