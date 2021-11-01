// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, func) {
    if(arr.length == 0)
    {
        return false;
    }
    if (func(arr[0]) === true) {
        return true
    } else {
        return someRecursive(arr.slice(1), func)
    }
}

console.log(someRecursive([1, 2, 3, 4], isOdd))
console.log(someRecursive([4, 6, 8, 9], isOdd))
console.log(someRecursive([4, 6, 8], isOdd))
console.log(someRecursive([1, 2, 3, 4], val => val > 10))
console.log(someRecursive([1, 2, 3, 14], val => val > 10))
