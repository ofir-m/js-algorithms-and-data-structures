// in place
function quickSort(arr, firstIndex, lastIndex) {
    if (lastIndex - firstIndex <= 1) {
        return;
    }
    const pivotItem = arr[firstIndex]; //always pivot item will be at the first index

    let swapIndex = firstIndex;

    //place all items that are smaller than pivotItem (first item) to it's right.
    for (let i = firstIndex + 1; i <= lastIndex; i++) { //start looping right after the pivot item (first item)
        if (arr[i] < pivotItem) {
            swapIndex++;
            const temp = arr[i];
            arr[i] = arr[swapIndex]
            arr[swapIndex] = temp;
        }
    }

    //swap the pivotItem (first item) with the last swapped item from above
    const temp = arr[swapIndex];
    arr[swapIndex] = pivotItem
    arr[firstIndex] = temp;

    quickSort(arr, 0, swapIndex - 1);
    quickSort(arr, swapIndex + 1, lastIndex);

    return arr;
}

const arr = [5, 1, 2, 8, -3, -4, 6, 6, 5, 4, 7, 6]
console.log(quickSort(arr, 0, arr.length - 1))
// console.log(quickSort([4]))
