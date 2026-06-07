# Sum of All Numbers in an Array

## Problem

Write a function that returns the sum of all numbers in an array.

### Example

Input:

```javascript
[1, 2, 3, 4, 5]
```

Output:

```javascript
15
```

---

## Method 1: Using Built-in Method

```javascript
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
```

### Explanation

#### What is `reduce()`?

`reduce()` is used to combine all elements of an array into a single value.

Example:

```javascript
[1, 2, 3, 4, 5].reduce((sum, num) => sum + num, 0);
```

Output:

```javascript
15
```

---

#### Parameters Used

```javascript
(sum, num) => sum + num
```

- `sum` = accumulated value
- `num` = current array element

Initial value:

```javascript
0
```

---

## Method 2: Without Built-in Method

```javascript
function sumArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}
```

---

## Explanation

### What is `arr`?

`arr` is a parameter that receives the array passed to the function.

Example:

```javascript
sumArray([1, 2, 3, 4, 5]);
```

Here:

```javascript
arr = [1, 2, 3, 4, 5];
```

---

### Why do we use `sum`?

```javascript
let sum = 0;
```

`sum` is used to store the running total.

Initially:

```javascript
sum = 0;
```

---

### How does the loop work?

```javascript
for (let i = 0; i < arr.length; i++)
```

For:

```javascript
[1, 2, 3, 4, 5]
```

Indexes:

```text
1  2  3  4  5
0  1  2  3  4
```

Values of `i`:

```text
0 → 1 → 2 → 3 → 4
```

---

### What does `+=` mean?

```javascript
sum += arr[i];
```

is the same as:

```javascript
sum = sum + arr[i];
```

---

### Dry Run

Input:

```javascript
[1, 2, 3, 4, 5]
```

Initial:

```javascript
sum = 0
```

Iteration 1:

```javascript
sum = 0 + 1
```

Result:

```javascript
1
```

---

Iteration 2:

```javascript
sum = 1 + 2
```

Result:

```javascript
3
```

---

Iteration 3:

```javascript
sum = 3 + 3
```

Result:

```javascript
6
```

---

Iteration 4:

```javascript
sum = 6 + 4
```

Result:

```javascript
10
```

---

Iteration 5:

```javascript
sum = 10 + 5
```

Result:

```javascript
15
```

---

### What does `return` do?

```javascript
return sum;
```

Returns the final sum back to the place where the function was called.

Example:

```javascript
sumArray([1, 2, 3, 4, 5]);
```

Returns:

```javascript
15
```

---

## What is an Accumulator?

An accumulator is a variable that stores a running result while a loop executes.

Example:

```javascript
let sum = 0;
```

As the loop runs, `sum` keeps accumulating values.

```javascript
0 → 1 → 3 → 6 → 10 → 15
```

---

## Concepts Used

- Function
- Parameter
- Return
- Array
- Array Indexing
- Variable
- Accumulator Pattern
- For Loop
- `+=` Operator
- Array Length
- reduce()

---

## Time Complexity

### Built-in Method

O(n)

The function processes each element once.

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

Only one variable (`sum`) is used.0
