# Count Even Numbers in an Array

## Problem

Write a function that counts how many even numbers are present in an array.

### Example

Input:

```javascript
[1, 2, 3, 4, 5, 6]
```

Output:

```javascript
3
```

Because:

```text
2, 4, 6
```

are even numbers.

---

## Method 1: Using Built-in Method

```javascript
function countEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).length;
}
```

### Explanation

#### What is `filter()`?

`filter()` creates a new array containing elements that match a condition.

Example:

```javascript
[1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);
```

Output:

```javascript
[2, 4, 6]
```

#### What is `.length`?

Returns the number of elements in an array.

Example:

```javascript
[2, 4, 6].length
```

Output:

```javascript
3
```

---

## Method 2: Without Built-in Method

```javascript
function countEvenNumbers(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}
```

---

## Explanation

### What is `arr`?

`arr` is a parameter that receives the array passed to the function.

Example:

```javascript
countEvenNumbers([1, 2, 3, 4, 5, 6]);
```

Here:

```javascript
arr = [1, 2, 3, 4, 5, 6];
```

---

### What is `count`?

```javascript
let count = 0;
```

A counter variable used to keep track of how many even numbers are found.

Initially:

```javascript
count = 0;
```

---

### How does the loop work?

```javascript
for (let i = 0; i < arr.length; i++)
```

For:

```javascript
[1, 2, 3, 4, 5, 6]
```

Indexes:

```text
1  2  3  4  5  6
0  1  2  3  4  5
```

Values of `i`:

```text
0 → 1 → 2 → 3 → 4 → 5
```

---

### What does `%` mean?

`%` is the modulus operator.

It returns the remainder after division.

Example:

```javascript
4 % 2
```

Output:

```javascript
0
```

Example:

```javascript
5 % 2
```

Output:

```javascript
1
```

---

### How do we check for an even number?

```javascript
arr[i] % 2 === 0
```

If the remainder is 0, the number is even.

Examples:

```javascript
2 % 2 === 0 // true
4 % 2 === 0 // true
6 % 2 === 0 // true
```

---

### Dry Run

Input:

```javascript
[1, 2, 3, 4, 5, 6]
```

Initial:

```javascript
count = 0
```

Check 1:

```javascript
1 % 2 === 0
```

False

```javascript
count = 0
```

Check 2:

```javascript
2 % 2 === 0
```

True

```javascript
count = 1
```

Check 3:

```javascript
3 % 2 === 0
```

False

```javascript
count = 1
```

Check 4:

```javascript
4 % 2 === 0
```

True

```javascript
count = 2
```

Check 5:

```javascript
5 % 2 === 0
```

False

```javascript
count = 2
```

Check 6:

```javascript
6 % 2 === 0
```

True

```javascript
count = 3
```

Final Result:

```javascript
3
```

---

### What does `return` do?

```javascript
return count;
```

Returns the total number of even numbers found.

Example:

```javascript
countEvenNumbers([1, 2, 3, 4, 5, 6]);
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
- Array
- Array Indexing
- Variable
- Counter Pattern
- For Loop
- if Statement
- Modulus Operator (`%`)
- Comparison Operator (`===`)
- filter()
- length

---

## Time Complexity

### Built-in Method

O(n)

The array is checked once.

### Without Built-in Method

O(n)

The loop visits each element once.

---

## Space Complexity

### Built-in Method

O(n)

`filter()` creates a new array.

### Without Built-in Method

O(1)

Only one counter variable is used.
