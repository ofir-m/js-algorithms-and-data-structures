// SAMPLE INPUT/OUTPUT
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ..
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fibonacci(num) {
    if (num == 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(4))
console.log(fibonacci(10))
console.log(fibonacci(28))
