//Method 1: Using includes()

function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));

//Method 2: Without includes()
function countVowels(str) {
    let count = 0;

    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === 'a' ||
            str[i] === 'e' ||
            str[i] === 'i' ||
            str[i] === 'o' ||
            str[i] === 'u'
        ) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));
