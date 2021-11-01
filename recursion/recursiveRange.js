// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 1*2*3*4*5*6 = 21
// recursiveRange(10) // 1*2*3*4*5*6*7*8*9*10 = 55

function recursiveRange(num) {
    if (num === 1) {
        return 1;
    }
    return recursiveRange(num - 1) + num
}

console.log(recursiveRange(6))
console.log(recursiveRange(10))
