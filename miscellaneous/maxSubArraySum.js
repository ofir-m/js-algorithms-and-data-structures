/**
 * problem:
 * write a function that accepts an array of integers and a number n.
 * the function should calculate the maximum sum of n consecutive elements in the array.
 * @param arr
 * @param n
 * @returns {null}
 */
function maxSubArraySum(arr, n) {
    if (n > arr.length) {
        throw "n cannot be larger then array length"
    }
    if (n <0) {
        throw "n cannot be negative"
    }
    let subArraySum = null;
    for (let i = 0; i < arr.length; i++) {
        if (i < n) {
            subArraySum = (subArraySum ?? 0) + arr[i]; //do not remove the parenthesis
            continue;
        }

        if (arr[i] > arr[i - n]) {
            subArraySum = subArraySum + arr[i] - arr[i - n];
        }
    }
    return subArraySum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2))
