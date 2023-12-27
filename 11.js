// function getIndexsForPalindrome(word) {
//     let reverse = word.split('').reverse().join('')
//     if (word === reverse) return []
//     let diff = []
//     for (let char of word) {
//         if (diff.includes(char)) { } else { diff.push(char) }
//     }
//     if (diff.length > word.length / 2) return null
//     let result = []
//     for (let i = 0; i < word.length; i++) {
//         if (word[i] !== reverse[i]) result.push(i)
//     }
//     return result
// }

function getIndexsForPalindrome(word) {
    let reverse = word.split('').reverse().join('')
    if (word === reverse) return []
    for (let i = 0; i < word.length; i++) {
        for (let j = i + 1; j < word.length; j++) {
            let chars = word.split('')
            let temp = chars[i]
            chars[i] = chars[j]
            chars[j] = temp
            let swappedWord = chars.join('')
            let swappedWordReverse = swappedWord.split('').reverse().join('')
            if (swappedWord === swappedWordReverse) return [i, j]
        }
    }
    return null
}

// Ejemplos
console.log(getIndexsForPalindrome('anna'));      // []
console.log(getIndexsForPalindrome('abab'));      // [0, 1]
console.log(getIndexsForPalindrome('abac'));      // null
console.log(getIndexsForPalindrome('aaaaaaaa'));  // []
console.log(getIndexsForPalindrome('aaababa'));   // [1, 3]
console.log(getIndexsForPalindrome('caababa'));   // null
console.log(getIndexsForPalindrome('rotaratov')); // [4, 8]