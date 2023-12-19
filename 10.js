function createChristmasTree(ornaments, height) {
    let result = ''
    let symbolsneeded = 0
    for (let i = 1; i <= height; i++) symbolsneeded += i
    let symbols = Array(symbolsneeded).fill(ornaments.split('')).flat()
    let n = 0
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < height - i - 1; j++) result += ' '
        for (let k = 0; k < i + 1; k++) {
            result += symbols[n] + ' '
            n++
        }
        result = result.slice(0, result.length-1) + '\n'
    }
    for (let l = 0; l < height-1; l++) result += ' '
    result += '|\n'
    return result
}

console.log(createChristmasTree('123', 4))
console.log(createChristmasTree('*@o', 3))