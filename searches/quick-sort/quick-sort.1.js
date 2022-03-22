function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const leftArr = [], rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        const item = arr[i];
        if (item < pivot) {
            leftArr.push(item);
        } else {
            rightArr.push(item);
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

console.log(quickSort([5, 2, 1, 8, -4, 6, 6, 5, -3, 4, 7, 6, 3, 3]))
// console.log(quickSort([4]))
