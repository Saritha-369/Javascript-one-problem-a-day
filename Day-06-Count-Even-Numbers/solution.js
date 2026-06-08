// Method 1: Using Built-in Method
function countEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0).length;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));


// Method 2: Without Built-in Method

function countEvenNumbers(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
