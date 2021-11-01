function stringSearch(str, term) {
    const indexesArray = [];
    for (let i = 0; i < str.length - term.length+1; i++) {
        for (let j = 0; j < term.length; j++) {
            if (str[i + j] !== term[j]) {
                break;
            }
            if (j === term.length - 1) {
                indexesArray.push(i);
            }
        }
    }
    return indexesArray;
}

console.log(stringSearch("rerwrbvnwrsdkwrs","wrs"))
