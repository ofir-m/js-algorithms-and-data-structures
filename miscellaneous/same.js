/**
 * returns true only if each element in arr1 has a corresponding squared element in arr2
 * @param arr1
 * @param arr2
 * @returns {boolean}
 */
function same(arr1, arr2) {
    let obj = {}
    for (const item of arr1) {
        obj[item] = (obj[item] === undefined ? 1 : ++obj[item]);
    }
    for (const item of arr2) {
        const itemSqrt = Math.sqrt(item);
        if (obj[itemSqrt] === undefined || obj[itemSqrt] === 0) return false; //can be replaced by: if (obj[itemSqrt])
        obj[itemSqrt]--;
    }
    for (const item in obj) {
        if (obj[item] > 0) return false;
    }
    return true;
}

console.log(same([4, 2, 4, 3, 1, 1], [16, 1, 4, 9, 16, 1]))
