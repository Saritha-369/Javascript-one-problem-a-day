# Count the Number of Properties in an Object

## Problem

Write a function that returns the number of properties in an object.

### Example

Input:

```javascript
{
    name: "John",
    age: 25,
    city: "New York"
}
```

Output:

```javascript
3
```

---

## Method 1: Using Built-in Method

```javascript
function countProperties(obj) {
    return Object.keys(obj).length;
}
```

### Explanation

#### What is `Object.keys()`?

`Object.keys()` returns an array containing all the property names (keys) of an object.

Example:

```javascript
Object.keys({
    name: "John",
    age: 25,
    city: "New York"
});
```

Output:

```javascript
["name", "age", "city"]
```

---

#### What is `.length`?

`.length` returns the number of elements in an array.

Example:

```javascript
["name", "age", "city"].length
```

Output:

```javascript
3
```

---

## Method 2: Using a for...in Loop

```javascript
function countProperties(obj) {
    let count = 0;

    for (let key in obj) {
        count++;
    }

    return count;
}
```

---

## Explanation

### What is `obj`?

`obj` is a parameter that receives the object passed to the function.

Example:

```javascript
countProperties({
    name: "John",
    age: 25,
    city: "New York"
});
```

Here:

```javascript
obj = {
    name: "John",
    age: 25,
    city: "New York"
};
```

---

### What is an Object?

An object stores data as key-value pairs.

Example:

```javascript
const person = {
    name: "John",
    age: 25
};
```

Here:

```javascript
name -> "John"
age  -> 25
```

`name` and `age` are called properties (or keys).

---

### Why do we use `count`?

```javascript
let count = 0;
```

A counter variable used to keep track of the number of properties.

Initially:

```javascript
count = 0;
```

---

### What is `for...in`?

`for...in` is used to loop through the properties of an object.

Example:

```javascript
for (let key in obj)
```

For:

```javascript
{
    name: "John",
    age: 25,
    city: "New York"
}
```

The loop visits:

```text
name
age
city
```

---

### How does the counting work?

Whenever a property is found:

```javascript
count++;
```

The counter increases by 1.

---

### Dry Run

Input:

```javascript
{
    name: "John",
    age: 25,
    city: "New York"
}
```

Initial:

```javascript
count = 0
```

Property:

```javascript
name
```

```javascript
count = 1
```

---

Property:

```javascript
age
```

```javascript
count = 2
```

---

Property:

```javascript
city
```

```javascript
count = 3
```

---

Final Result:

```javascript
3
```

---

### What does `return` do?

```javascript
return count;
```

Returns the total number of properties back to the place where the function was called.

Example:

```javascript
countProperties({
    name: "John",
    age: 25,
    city: "New York"
});
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
- Object
- Properties (Keys)
- Object.keys()
- Array Length
- for...in Loop
- Variable
- Counter Pattern

---

## Time Complexity

### Built-in Method

O(n)

`Object.keys()` visits every property once.

### for...in Method

O(n)

The loop visits each property once.

---

## Space Complexity

### Built-in Method

O(n)

`Object.keys()` creates a new array containing all keys.

### for...in Method

O(1)

Only one counter variable is used.
