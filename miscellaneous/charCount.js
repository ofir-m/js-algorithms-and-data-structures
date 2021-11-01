/**
 * @example "abccdbcc" => {a:1, b:2, c:4, d:1 }
 * @param str
 * @returns {{}}
 */

function charCount(str) {

    if (!str.trim()) {
        throw new Error("str is empty");
    }

    if (!/^[A-Za-z]+$/.test(str)) {
        throw new Error("str is not alphabetic");
    }

    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCount[char] = (charCount[char] === undefined ? 1 : ++charCount[char]); //I've added parenthesis just for readability
    }

    return charCount
}


console.log(charCount("werrrrrrrre"))
// console.log(charCount(""))
//console.log(charCount("wewrewr55423"))
