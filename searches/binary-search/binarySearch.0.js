/**
 *
 * @param sortedArray
 * @param val
 * @returns true is element found. False if not found
 */
function binarySearch(sortedArray, val) {
    if (sortedArray.length === 0) {
        return false;
    }
    const middleIndex = Math.floor(sortedArray.length / 2);
    if (val === sortedArray[middleIndex]) {
        return true;
    }
    if (val > sortedArray[middleIndex]) {
        return binarySearch(sortedArray.slice(middleIndex + 1, sortedArray.length), val);
    }
    if (val < sortedArray[middleIndex]) {
        return binarySearch(sortedArray.slice(0, middleIndex), val);
    }
}


console.log(binarySearch([-34, -5, 0, 9, 14, 45, 49, 100, 345, 2200], 2200))
