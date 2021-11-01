function collectOddValues(arr) {
    if (arr.length === 0) {
        return [];
    }
    return collectOddValues(arr.slice(1)).concat(arr[0] % 2 === 0 ? [] : arr[0])
}

console.log(collectOddValues([1, 5, 8, 12, 13, 15, 17, 18]))
