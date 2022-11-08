// not in place
// see here https://stackoverflow.com/questions/5185864/javascript-quicksort
// exactly like your code (:
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const leftArr = [], rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        const item = arr[i];
        item < pivot ? leftArr.push(item) : rightArr.push(item);
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const arr = [5, 1, 2, 8, -3, -4, 6, 6, 5, 4, 7, 6]
console.log(quickSort(arr))
