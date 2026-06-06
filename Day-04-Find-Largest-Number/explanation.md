# Find Largest Number in an Array

## Problem

Write a function that returns the largest number from an array.

### Example

Input:

```javascript
[10, 5, 20, 8]
```

Output:

```javascript
20
```

---

## Method 1: Using Built-in Method

```javascript
function findLargest(arr) {
    return Math.max(...arr);
}
```

### Explanation

#### What is `Math.max()`?

`Math.max()` returns the largest value from a list of numbers.

Example:

```javascript
Math.max(10, 5, 20, 8);
```

Output:

```javascript
20
```

---

#### What is the Spread Operator (`...`)?

The spread operator converts an array into individual values.

Example:

```javascript
[10, 5, 20, 8]
```

becomes:

```javascript
10, 5, 20, 8
```

So:

```javascript
Math.max(...arr);
```

becomes:

```javascript
Math.max(10, 5, 20, 8);
```

---

## Method 2: Without Built-in Method

```javascript
function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}
```

---

## Explanation

### What is `arr`?

`arr` is a parameter that receives the array passed to the function.

Example:

```javascript
findLargest([10, 5, 20, 8]);
```

Here:

```javascript
arr = [10, 5, 20, 8];
```

---

### Why do we use `arr[0]`?

```javascript
let largest = arr[0];
```

We assume the first number is the largest initially.

For:

```javascript
[10, 5, 20, 8]
```

Initial value:

```javascript
largest = 10;
```

---

### How does the loop work?

```javascript
for (let i = 1; i < arr.length; i++)
```

The loop starts from index 1 because index 0 is already stored in `largest`.

Indexes:

```text
10  5  20  8
0   1   2  3
```

Values of `i`:

```text
1 → 2 → 3
```

---

### How does the comparison work?

```javascript
if (arr[i] > largest)
```

Checks whether the current element is greater than the current largest value.

---

### Dry Run

Input:

```javascript
[10, 5, 20, 8]
```

Initial:

```javascript
largest = 10
```

Iteration 1:

```javascript
5 > 10
```

False

```javascript
largest = 10
```

---

Iteration 2:

```javascript
20 > 10
```

True

```javascript
largest = 20
```

---

Iteration 3:

```javascript
8 > 20
```

False

```javascript
largest = 20
```

---

Final Result:

```javascript
20
```

---

### What does `return` do?

```javascript
return largest;
```

Returns the largest number back to the place where the function was called.

Example:

```javascript
findLargest([10, 5, 20, 8]);
```

Returns:

```javascript
20
```

---

## Concepts Used

- Function
- Parameter
- Return
- Array
- Array Indexing
- Variable
- For Loop
- if Statement
- Comparison Operator (`>`)
- Math.max()
- Spread Operator (`...`)

---

## Time Complexity

### Built-in Method

O(n)

The function checks all elements in the array.

### Without Built-in Method

O(n)

The loop visits each element once.

---

## Space Complexity

### Built-in Method

O(1)

No extra data structure is created.

### Without Built-in Method

O(1)

Only one variable (`largest`) is used.
