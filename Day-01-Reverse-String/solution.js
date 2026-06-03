// Method 1: Using Built-in Methods

function reverseStringBuiltIn(str) {
    return str.split('').reverse().join('');
}

console.log(reverseStringBuiltIn("hello"));


// Method 2: Without Built-in Methods

function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(reverseString("hello"));
