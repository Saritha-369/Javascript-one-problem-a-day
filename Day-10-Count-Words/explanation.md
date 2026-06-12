# Count the Number of Words in a Sentence

## Problem

Write a function that counts the number of words in a given sentence.

### Example

Input:

```javascript
"JavaScript is fun"
```

Output:

```javascript
3
```

---

## Method 1: Using Built-in Methods

```javascript
function countWords(sentence) {
    return sentence.trim().split(" ").length;
}
```

### Explanation

#### What is `trim()`?

`trim()` removes extra spaces from the beginning and end of a string.

Example:

```javascript
"  Hello World  ".trim();
```

Output:

```javascript
"Hello World"
```

---

#### What is `split(" ")`?

`split(" ")` divides a string into an array using spaces as separators.

Example:

```javascript
"JavaScript is fun".split(" ");
```

Output:

```javascript
["JavaScript", "is", "fun"]
```

---

#### What is `.length`?

`.length` returns the number of elements in an array.

Example:

```javascript
["JavaScript", "is", "fun"].length;
```

Output:

```javascript
3
```

---

## Method 2: Without Using `split()`

```javascript
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
```

---

## Explanation

### What is `sentence`?

`sentence` is a parameter that receives the text passed to the function.

Example:

```javascript
countWords("JavaScript is fun");
```

Here:

```javascript
sentence = "JavaScript is fun";
```

---

### Why do we use `count`?

```javascript
let count = 0;
```

It keeps track of how many words have been found.

Initially:

```javascript
count = 0;
```

---

### What is `inWord`?

```javascript
let inWord = false;
```

`inWord` is a boolean variable.

- `true` means we are currently inside a word.
- `false` means we are not inside a word.

This prevents counting the same word multiple times.

---

### How does the loop work?

```javascript
for (let i = 0; i < sentence.length; i++)
```

The loop checks each character one by one.

For:

```text
JavaScript is fun
```

It examines:

```text
J → a → v → a → S → c → r → i → p → t → (space) → i → s → (space) → f → u → n
```

---

### How is a new word detected?

```javascript
if (sentence[i] !== " " && !inWord)
```

This means:

- The current character is **not a space**, and
- We are **not already inside a word**.

When both conditions are true:

```javascript
count++;
inWord = true;
```

We have found the start of a new word.

---

### What happens when a space is found?

```javascript
else if (sentence[i] === " ") {
    inWord = false;
}
```

When a space is encountered, we mark that we are no longer inside a word.

This allows the next non-space character to be counted as the start of a new word.

---

### Dry Run

Input:

```text
"JavaScript is fun"
```

Start:

```javascript
count = 0
inWord = false
```

- `J` → start of a word → `count = 1`
- Continue through `avaScript`
- Space → `inWord = false`
- `i` → start of a new word → `count = 2`
- Continue through `s`
- Space → `inWord = false`
- `f` → start of a new word → `count = 3`

Final Result:

```javascript
3
```

---

### What does `return` do?

```javascript
return count;
```

It sends the final word count back to where the function was called.

Example:

```javascript
countWords("JavaScript is fun");
```

Returns:

```javascript
3
```

---

## Concepts Used

- Function
- Parameter
- Return
- String
- Variable
- Boolean (`true` / `false`)
- `for` Loop
- `if` Statement
- `trim()`
- `split()`
- `length`

---

## Time Complexity

### Built-in Method

O(n)

The string is processed once to split it into words.

### Without `split()`

O(n)

The loop checks each character once.

---

## Space Complexity

### Built-in Method

O(n)

An array of words is created.

### Without `split()`

O(1)

Only a few variables (`count` and `inWord`) are used.
