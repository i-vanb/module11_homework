function addNum(n) {
    return function (m) {
        return n + m
    }
}

const func = addNum(3)
console.log(func(8))
