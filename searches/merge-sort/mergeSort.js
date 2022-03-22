function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middleIndex = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middleIndex);
    const arrRight = arr.slice(middleIndex, arr.length);
    return merge(mergeSort(arrLeft), mergeSort(arrRight));
}

function merge(arrLeft, arrRight) {
    let sortedArr = []
    while (arrLeft.length > 0 && arrRight.length > 0) {
        if (arrLeft[0] <= arrRight[0]) {
            sortedArr.push(arrLeft[0])
            arrLeft.shift()
        } else {
            sortedArr.push(arrRight[0])
            arrRight.shift()
        }
    }

    if (arrLeft.length > 0) {
        sortedArr = sortedArr.concat(arrLeft)
    }

    if (arrRight.length > 0) {
        sortedArr = sortedArr.concat(arrRight)
    }

    return sortedArr;
}

console.log(mergeSort([55, 44, 7, 33, -4, 443]))
