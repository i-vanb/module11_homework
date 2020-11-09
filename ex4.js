function numLoops(a, b) {
    let start = a
    const interval = setInterval(()=> {
        console.log(start)
        if (start === b) {
            clearInterval(interval)
        }
        start++
    }, 1000)
}

numLoops(5, 15)
