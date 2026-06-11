# Check if an Array Contains Duplicates

## Problem

Write a function that checks whether an array contains duplicate values.

### Example 1

Input:

```javascript
[1, 2, 3, 4]
```

Output:

```javascript
false
```

---

### Example 2

Input:

```javascript
[1, 2, 3, 2]
```

Output:

```javascript
true
```

Because the number `2` appears more than once.

---

## Method 1: Using Set

```javascript
function containsDuplicate(arr) {
    return new Set(arr).size !== arr.length;
}
```

### Explanation

#### What is a Set?

A Set is a collection of unique values.

Example:

```javascript
new Set([1, 2, 3, 2]);
```

Output:

```javascript
{1, 2, 3}
```

The duplicate `2` is automatically removed.

---

#### What is `.size`?

Returns the number of unique values in a Set.

Example:

```javascript
new Set([1, 2, 3, 2]).size
```

Output:

```javascript
3
```

---

#### How does this solution work?

```javascript
new Set(arr).size !== arr.length
```

For:

```javascript
[1, 2, 3, 2]
```

Array length:

```javascript
4
```

Set size:

```javascript
3
```

Comparison:

```javascript
3 !== 4
```

Result:

```javascript
true
```

This means duplicates exist.

---

## Method 2: Without Built-in Method

```javascript
function containsDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }

    return false;
}
```

---

## Explanation

### What is `arr`?

`arr` is a parameter that receives the array passed to the function.

Example:

```javascript
containsDuplicate([1, 2, 3, 2]);
```

Here:

```javascript
arr = [1, 2, 3, 2];
```

---

### What is a Nested Loop?

A nested loop means a loop inside another loop.

```javascript
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        // comparison
    }
}
```

The inner loop compares the current element with all remaining elements.

---

### How does the comparison work?

```javascript
if (arr[i] === arr[j])
```

Checks whether two values are exactly equal.

If a match is found:

```javascript
return true;
```

---

### Dry Run

Input:

```javascript
[1, 2, 3, 2]
```

First Loop:

```javascript
i = 0
```

Compare:

```javascript
1 with 2
1 with 3
1 with 2
```

No match.

---

Second Loop:

```javascript
i = 1
```

Compare:

```javascript
2 with 3
2 with 2
```

Match found.

```javascript
return true;
```

---

### What does `return true` mean?

```javascript
return true;
```

Stops the function immediately and sends back:

```javascript
true
```

because a duplicate was found.

---

### What does `return false` mean?

If the loops finish without finding any duplicates:

```javascript
return false;
```

Example:

```javascript
containsDuplicate([1, 2, 3, 4]);
```

Returns:

```javascript
false
```

because every value is unique.

---

## Concepts Used

- Function
- Parameter
- Return
- Array
- Array Length
- Array Indexing
- Nested Loops
- Comparison Operator (`===`)
- Boolean Values (`true`, `false`)
- Set
- size

---

## Time Complexity

### Using Set

O(n)

The array is processed once.

### Nested Loops

O(n²)

Each element may be compared with every other element.

---

## Space Complexity

### Using Set

O(n)

A Set stores unique elements.

### Nested Loops

O(1)

No extra data structure is created.
