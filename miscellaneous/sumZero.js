/**
 * problem:
 * write a function which accepts a sorted array of integers.
 * the function should return the first pair where the sum is 0.
 * or empty array if pair was not found
 * @param sortedArr
 * @returns {*[]}
 */
function sumZero(sortedArr) {
    let leftIndex = 0;
    let rightIndex = sortedArr.length - 1;
    while (leftIndex < rightIndex) {
        const leftItem = sortedArr[leftIndex];
        const rightItem = sortedArr[rightIndex];
        if (leftItem * rightItem > 0) { //if both items are negative or positive, there's no point to continue checking
            return [];
        }
        if (leftItem + rightItem === 0) {
            return [leftItem, rightItem];
        }
        if (leftItem + rightItem < 0) {
            leftIndex++;
        }
        if (leftItem + rightItem > 0) {
            rightIndex--;
        }
    }
    return [];
}

console.log(sumZero([-8, -3, -2, 1, 2, 5, 6, 8]));
