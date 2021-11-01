// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    if (str.length === 0 || str.length === 1  ) {
        return true
    }
    return isPalindrome(str.substring(1, str.length - 1)) && str[0] === str[str.length - 1];
}

console.log(isPalindrome('awesome'))
console.log(isPalindrome('foobar'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))
console.log(isPalindrome('t'))
console.log(isPalindrome('tt'))
console.log(isPalindrome('ttt'))
console.log(isPalindrome('tc'))
