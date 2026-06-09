// Method 1: Using Built-in Method
function findSmallest(arr) {
    return Math.min(...arr);
}

console.log(findSmallest([10, 5, 20, 8]));

// Method 2: Without Built-in Method
function findSmallest(arr) {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

console.log(findSmallest([10, 5, 20, 8]));
