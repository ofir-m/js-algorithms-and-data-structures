/**
 * write a function which accepts a sorted array of integers
 * and counts the unique values in the array
 * @param sortedArray
 * @returns {number}
 */
function countUniqueValues(sortedArray) {
    let currentItem = null;
    let uniqueValues = 0
    for (const item of sortedArray) {
        if (item !== currentItem) {
            uniqueValues++;
            currentItem = item;
        }
    }
    return uniqueValues;
}
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([0]))
console.log(countUniqueValues([-8,-3,-3,0,4,4,7,12,12,12]))
