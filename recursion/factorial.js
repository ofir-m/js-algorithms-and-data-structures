// SAMPLE INPUT/OUTPUT
// factorial(0) // 1
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24

function factorial(num) {
    if (num === 0) {
        return 1;
    }
    return factorial(num - 1) * num;
}

console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(1))
