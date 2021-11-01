function bubbleSort(arr) {
    for (let j = arr.length; j > 1; j--) {
        for (let i = 1; i < j; i++) {
            if (arr[i - 1] > arr[i]) {
                const temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}


console.log(bubbleSort([0, 7, 7 - 3, 7, -1, 2, 8, 9, -10]))
