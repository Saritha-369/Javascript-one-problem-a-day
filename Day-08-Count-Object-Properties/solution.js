// Method 1: Using Built-in Method
function countProperties(obj) {
    return Object.keys(obj).length;
}

console.log(
    countProperties({
        name: "John",
        age: 25,
        city: "New York"
    })
);

// Method 2: Without Using .length Directly on Keys Count Logic
function countProperties(obj) {
    let count = 0;

    for (let key in obj) {
        count++;
    }

    return count;
}

console.log(
    countProperties({
        name: "John",
        age: 25,
        city: "New York"
    })
);
