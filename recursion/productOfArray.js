// SAMPLE INPUT/OUTPUT
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
    if (arr.length === 1) {
        return arr[0];
    }
    return productOfArray(arr.slice(1)) * arr[0];
}

console.log(productOfArray([2, 3,6]));
console.log(productOfArray([2, 0,100]));
console.log(productOfArray([222]));

