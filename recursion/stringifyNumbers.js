// SAMPLE INPUT / OUTPUT

function stringifyNumbers(obj) {
    for (const prop in obj) {
        if (typeof obj[prop] === "object") {
            stringifyNumbers(obj[prop])
        } else if (typeof obj[prop] === "number") {
            obj[prop] = obj[prop].toString();
        }
    }
    return obj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj))
