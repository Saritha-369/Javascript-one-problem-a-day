# Find Smallest Number in an Array

## Problem

Write a function that returns the smallest number from an array.

### Example

Input:

```javascript
[10, 5, 20, 8]
```

Output:

```javascript
5
```

---

## Method 1: Using Built-in Method

```javascript
function findSmallest(arr) {
    return Math.min(...arr);
}
```

### Explanation

#### What is `Math.min()`?

`Math.min()` returns the smallest value from a list of numbers.

Example:

```javascript
Math.min(10, 5, 20, 8);
```

Output:

```javascript
5
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
Math.min(...arr);
```

becomes:

```javascript
Math.min(10, 5, 20, 8);
```

---

## Method 2: Without Built-in Method

```javascript
function findSmallest(arr) {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}
```

---

## Explanation

### What is `arr`?

`arr` is a parameter that receives the array passed to the function.

Example:

```javascript
findSmallest([10, 5, 20, 8]);
```

Here:

```javascript
arr = [10, 5, 20, 8];
```

---

### Why do we use `arr[0]`?

```javascript
let smallest = arr[0];
```

We assume the first number is the smallest initially.

For:

```javascript
[10, 5, 20, 8]
```

Initial value:

```javascript
smallest = 10;
```

---

### How does the loop work?

```javascript
for (let i = 1; i < arr.length; i++)
```

The loop starts from index 1 because index 0 is already stored in `smallest`.

Indexes:

```text
10  5  20  8
0   1   2   3
```

Values of `i`:

```text
1 → 2 → 3
```

---

### How does the comparison work?

```javascript
if (arr[i] < smallest)
```

Checks whether the current element is smaller than the current smallest value.

If it is smaller, update the value of `smallest`.

---

### Dry Run

Input:

```javascript
[10, 5, 20, 8]
```

Initial:

```javascript
smallest = 10
```

Iteration 1:

```javascript
5 < 10
```

True

```javascript
smallest = 5
```

---

Iteration 2:

```javascript
20 < 5
```

False

```javascript
smallest = 5
```

---

Iteration 3:

```javascript
8 < 5
```

False

```javascript
smallest = 5
```

---

Final Result:

```javascript
5
```

---

### What does `return` do?

```javascript
return smallest;
```

Returns the smallest number back to the place where the function was called.

Example:

```javascript
findSmallest([10, 5, 20, 8]);
```

Returns:

```javascript
5
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
- Comparison Operator (`<`)
- Math.min()
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

Only one variable (`smallest`) is used.
