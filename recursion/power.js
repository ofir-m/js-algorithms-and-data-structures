// SAMPLE INPUT/OUTPUT
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return power(base, exponent - 1) * base;
}

console.log(power(2, 3))
console.log(power(2, 0))

