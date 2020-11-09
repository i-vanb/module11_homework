const primeOrCompositeNum = num => {
    if (num > 1000) return 'Данные не верны. Ыыедите число до 1000'
    if (num === 0) return 'num 0'
    if (num === 1) return 'num 1'

    for(let i = 2; i <= num/2; i++) {
        if (num % i === 0 && num !== i) return 'composite'
    }
        return 'prime'
}

console.log('45 is', primeOrCompositeNum(45), 'num')
