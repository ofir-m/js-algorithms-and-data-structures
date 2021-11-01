// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


function capitalizeFirst(arr) {
    if (arr.length == 0) {
        return [];
    }
    const capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);
    return [capitalized].concat(capitalizeFirst(arr.slice(1)));

}

console.log(capitalizeFirst(['car', 'taco', 'banana']))

