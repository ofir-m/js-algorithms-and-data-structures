/**
 * problem:
 * given 2 strings, write a function to determine if the second string is an anagram of the first.
 * an anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman.
 * @param str1
 * @param str2
 * @returns {boolean}
 */
function validAnagram(str1, str2) {
    const obj = {}
    for (const char of str1) {
        obj[char] = obj[char] === undefined ? 1 : ++obj[char];
    }
    for (const char of str2) {
        if (obj[char] === undefined || obj[char] === 0) {
            return false;
        }
        obj[char]--;
    }
    for (const char in obj) {
        if (obj[char] > 0) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram("weeert","ewreet"))
