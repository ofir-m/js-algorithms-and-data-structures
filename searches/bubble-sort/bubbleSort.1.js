//recursive
function bubbleSort(arr) {
    if (arr.length === 1) {
        return [arr[0]];
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            const temp = arr[i - 1];
            arr[i - 1] = arr[i];
            arr[i] = temp;
        }
    }
    return [...bubbleSort(arr.slice(0, -1)), arr[arr.length - 1]];
}


console.log(bubbleSort([0, 7, 7 - 3, 7, -1, 2, 8, 9, -10]))
