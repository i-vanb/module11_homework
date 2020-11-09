const countEvenOddNumbers = arr => {
    let oddNumbers = 0
    let evenNumbers = 0
    let zero = 0
    let others = 0
    arr.map(i => {
        if (i === 0) return zero++
        if (typeof i !== 'number') return others++
        if (i%2 === 0) return evenNumbers++
        return oddNumbers++
    })
    console.log('Четных чисел - ', evenNumbers)
    console.log('Нечетных чисел - ', oddNumbers)
    console.log('Нулей - ', zero)
    console.log('Не числа - ', others)
}

const arr = [3, 3, 3, 4, 4, 4, 4, 0, 0, '0', '3', '4', null, Object, {}, [], ()=>{}]
countEvenOddNumbers(arr)
