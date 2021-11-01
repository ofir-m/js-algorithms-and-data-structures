function flatten(arr) {
    if (arr.length === 0) {
        return [];
    }
    if (Array.isArray(arr[0])) {
        return [...flatten([...arr[0]]), ...flatten(arr.slice(1))];
    } else {
        return [arr[0], ...flatten(arr.slice(1))]
    }
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]],[1, [2, [3, 4], [[5]]]]])

console.log(flatten([-3, [[[1], [[[2]]], [[[[[[[3]]]]]]]]], [1, [2, [3, 4], [[5]]]], 8, 9, 10]));
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
// console.log(flatten([1, 2, 3, [4, 5] ]) );
//console.log(flatten([1, 2, 3, 4, 5,7,8,9,45,34,26,88,33,22 ]) );
