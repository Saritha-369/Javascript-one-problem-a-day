// Method 1: Using built-in method
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));


//Method 2: Without using built-in method
function isPalindrome(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str === reversed;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
