const original1 = 'abcd'
const modified1 = 'abcde'
console.log(findNaughtyStep(original1, modified1)) // 'e'

const original2 = 'stepfor'
const modified2 = 'stepor'
console.log(findNaughtyStep(original2, modified2)) // 'f'

const original3 = 'abcde'
const modified3 = 'abcde'
console.log(findNaughtyStep(original3, modified3)) // ''

function findNaughtyStep(original, modified) {
    for (let i = 0; i <= original.length; i++) {
        if (original[i] !== modified[i]) {
            if (original.length < modified.length) return modified[i]
            if (original.length > modified.length) return original[i]
        }
    }
    return ''
}