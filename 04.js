const a = decode('hola (odnum)')
console.log(a)

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus

function decode(message) {
    let stack = []
    for (let i = 0; i < message.length; i++) {
        if (message[i] === '(') {
            stack.push(i)
        } else if (message[i] === ')') {
            let start = stack.pop()
            let end = i
            let incorrect = message.substring(start+1, end)
            let correct = incorrect.split('').reverse().join('')
            message = message.replace(message.substring(start, end+1), correct)
            i -=2
        }
    }
    return message
}