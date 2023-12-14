const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

function maxDistance(movements) {
    let right = 0
    let left = 0
    let x = 0
    for (let movement of movements) {
        if (movement === '>') right++
        if (movement === '<') left++
        if (movement === '*') x++
    }
    return Math.max(right, left) - Math.min(right, left) + x
}