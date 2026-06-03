# Reverse String

## Problem

Write a function that takes a string and returns the string in reverse order.

Example

Input: hello

Output: olleh

## Method 1: Using Built-in Methods

javascript
function reverseStringBuiltIn(str) {
    return str.split('').reverse().join('');
}


### Explanation

split('') breaks the string into individual characters and creates an array.

javascript
"hello".split('')


Output:

javascript
['h', 'e', 'l', 'l', 'o']


reverse() changes the order of the array elements.

Output:

javascript
['o', 'l', 'l', 'e', 'h']


join('') combines all characters into a single string.

Output:

javascript
"olleh"


## Method 2: Without Built-in Methods

javascript
function reverseString(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}


### Explanation

Create an empty string called `reversed`.

Start from the last character and move backwards.

For "hello":

text
h e l l o
0 1 2 3 4


Characters are added one by one:

text
o
ol
oll
olle
olleh


Return the final reversed string.

## Concepts Learned

### Function

A function is a block of code that runs when we call it.

### Parameter

A parameter is the value received by a function.

Example:

javascript
reverseString("hello")

Here, `"hello"` is passed to `str`.

### Return

return gives the result back from the function.

### For Loop

A for loop is used to run code multiple times.

### String Length

`str.length` gives the total number of characters in a string.

### String Indexing

`str[i]` is used to get a character at a specific position.
