/**
 *
 * @param sortedArray
 * @param val
 * @param startIndex
 * @param endIndex
 * @returns index of element if found. -1 if not found
 */
function binarySearch(sortedArray, val, startIndex, endIndex) {

    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    if (val === sortedArray[middleIndex]) {
        return middleIndex;
    }

    // must be placed here. after the previous if.
    if (startIndex >= endIndex) {
        return -1
    }

    if (val > sortedArray[middleIndex]) {
        return binarySearch(sortedArray, val, middleIndex + 1, endIndex);
    }
    if (val < sortedArray[middleIndex]) {
        return binarySearch(sortedArray, val, startIndex, middleIndex - 1);
    }
}

const sortedArray = [-34, -5, 0, 9, 14, 45, 49, 100, 345, 2200]
console.log(binarySearch(sortedArray, 2200, 0, sortedArray.length - 1))
