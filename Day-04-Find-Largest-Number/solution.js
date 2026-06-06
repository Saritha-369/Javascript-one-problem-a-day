// Method 1: Using Built-in Method
function findLargest(arr) {
    return Math.max(...arr);
}

console.log(findLargest([10, 5, 20, 8]));

// Method 2: Without Built-in Method
function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

console.log(findLargest([10, 5, 20, 8]));
