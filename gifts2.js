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
    gifts.forEach((gift) => {
        let geft = "";
        for (let i = 0; i < gift.length; i++) {
            if (materials.includes(gift[i])) {
                geft += gift[i];
            }
        }
        if (geft === gift) {
            possibles.push(gift);
        }
    })
    return possibles;
}