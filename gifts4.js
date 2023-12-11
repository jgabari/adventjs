decode('hola (odnum)')

// const b = decode('(olleh) (dlrow)!')
// console.log(b) // hello world!

// const c = decode('sa(u(cla)atn)s')
// console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus

function decode(message) {
    let result = ''
    let patras = false
    for (let i = 0; i < message.length-1; i++) {
        if (message[i] === '(') {
            i = message.indexOf(')')
            patras = !patras
        } else {
            result += message[i]
        }
        if (patras === true) {
            i -= 2
        }
        console.log(result)
    }
    return result
}