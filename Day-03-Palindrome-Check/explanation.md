# Palindrome Check

## Problem

Write a function that checks whether a given string is a palindrome.

A palindrome is a word that reads the same forward and backward.

### Example

Input:

madam

Output:

true

Input:

hello

Output:

false

---

## Method 1: Using Built-in Methods

```javascript
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
```

### Explanation

#### split('')

Converts the string into an array.

```javascript
"madam".split('')
```

Output:

```javascript
['m', 'a', 'd', 'a', 'm']
```

#### reverse()

Reverses the array.

```javascript
['m', 'a', 'd', 'a', 'm']
```

Output:

```javascript
['m', 'a', 'd', 'a', 'm']
```

#### join('')

Converts the array back into a string.

```javascript
"madam"
```

#### Comparison

```javascript
str === reversed
```

Checks whether the original string and reversed string are equal.

---

## Method 2: Without Built-in Methods

```javascript
function isPalindrome(str) {
    let reversed = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return str === reversed;
}
```

### Explanation

Create an empty string:

```javascript
let reversed = '';
```

Start from the last character:

```javascript
let i = str.length - 1;
```

For:

```text
madam
```

Indexes:

```text
m a d a m
0 1 2 3 4
```

Loop backwards:

```javascript
for (let i = str.length - 1; i >= 0; i--)
```

Characters added:

```text
m
ma
mad
mada
madam
```

Compare the original string with the reversed string:

```javascript
return str === reversed;
```

If both are equal:

```javascript
true
```

Otherwise:

```javascript
false
```

---

## What is a Boolean?

A boolean is a value that can be either:

```javascript
true
false
```

The palindrome function returns a boolean value.

Example:

```javascript
isPalindrome("madam")
```

Returns:

```javascript
true
```

Example:

```javascript
isPalindrome("hello")
```

Returns:

```javascript
false
```

---

## What does return do?

```javascript
return str === reversed;
```

Returns the result of the comparison back to the place where the function was called.

Example:

```javascript
let result = isPalindrome("madam");
```

After execution:

```javascript
let result = true;
```

---

## Concepts Used

- Function
- Parameter
- Return
- Boolean
- String Length
- String Indexing
- For Loop
- String Concatenation
- Comparison Operator (`===`)
- split()
- reverse()
- join()

---

## Time Complexity

### Built-in Method

O(n)

The string is traversed to reverse it.

### Without Built-in Method

O(n)

The loop visits each character once.

---

## Space Complexity

### Built-in Method

O(n)

A new array and string are created.

### Without Built-in Method

O(n)

A new reversed string is created.
