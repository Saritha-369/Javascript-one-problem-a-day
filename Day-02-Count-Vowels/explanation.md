
# Count Vowels in a String

## Problem

Write a function that counts the number of vowels (`a`, `e`, `i`, `o`, `u`) in a given string.

### Example

Input:

hello

Output:

2

Input:

JavaScript

Output:

3

---

## Solution

```javascript
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
```

---

## Explanation

### Why use a function?

A function allows us to reuse the same logic for different strings.

Example:

```javascript
countVowels("hello");
countVowels("JavaScript");
```

---

### What is `str`?

`str` is a parameter that receives the string passed to the function.

Example:

```javascript
countVowels("hello");
```

Here:

```javascript
str = "hello";
```

---

### Why use `toLowerCase()`?

```javascript
str = str.toLowerCase();
```

Converts all characters to lowercase.

Example:

```javascript
"HELLO" → "hello"
```

This helps us check only lowercase vowels.

---

### What is `count`?

```javascript
let count = 0;
```

A counter variable used to keep track of the number of vowels.

Whenever a vowel is found:

```javascript
count++;
```

The count increases by 1.

---

### How does the loop work?

```javascript
for (let i = 0; i < str.length; i++)
```

The loop checks each character one by one.

For:

```text
hello
```

Indexes:

```text
h e l l o
0 1 2 3 4
```

The value of `i` will be:

```text
0 → 1 → 2 → 3 → 4
```

---

### How are vowels checked?

```javascript
if (
    str[i] === 'a' ||
    str[i] === 'e' ||
    str[i] === 'i' ||
    str[i] === 'o' ||
    str[i] === 'u'
)
```

The condition checks whether the current character is a vowel.

For:

```text
hello
```

- h ❌
- e ✅
- l ❌
- l ❌
- o ✅

Total vowels = 2

---

### What does `return` do?

```javascript
return count;
```

Returns the total number of vowels found.

Example:

```javascript
countVowels("hello");
```

Returns:

```javascript
2
```

---

## Concepts Used

- Function
- Parameter
- Return
- Variable
- Counter Pattern
- for Loop
- String Length
- String Indexing
- if Statement
- Logical OR (`||`)
- toLowerCase()

---

## Time Complexity

O(n)

The loop checks each character once.

---

## Space Complexity

O(1)

Only a few variables are used regardless of input size.
