// SAMPLE INPUT / OUTPUT

function collectStrings(obj) {
    let arr = [];
    for (const prop in obj) {
        if (typeof obj[prop] === "object") {
            arr = arr.concat(collectStrings(obj[prop]))
        } else if (typeof obj[prop] === "string") {
            arr.push(obj[prop]);
        }
    }
    return arr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj, []))
