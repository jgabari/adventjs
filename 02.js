const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

console.log(manufacture(gifts1, materials1)) // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

console.log(manufacture(gifts2, materials2)) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

console.log(manufacture(gifts3, materials3)) // []

// ____________________________________________________________

function manufacture(gifts, materials) {
    let possibles = [];
    for (const gift of gifts) {
        let success = 0;
        for (const letter of gift) {
            if (materials.includes(letter)) {
                success += 1;
            }
        }
        if (success === gift.length) {
            possibles.push(gift);
        }
    }
    return possibles;
}