/*
¡Alerta en la fábrica de juguetes de Santa! El Grinch 😈 se ha infiltrado en el
almacén y ha saboteado algunos de los juguetes 💣.

Los elfos necesitan ayuda para encontrar los juguetes saboteados y eliminarlos
antes de que llegue la Navidad. Para ello tenemos el mapa 🗺️ del almacén, que
es una matriz.

Los * representan los juguetes saboteados y las celdas vacías con un espacio en
blanco son los lugares seguros.

Tu tarea es escribir una función que devuelva la misma matriz pero, en cada
posición, nos indique el número de juguetes saboteados que hay en las celdas
adyacentes.

Si una celda contiene un juguete saboteado, debe permanecer igual. Si una celda
no toca ningún juguete saboteado, debe contener un espacio en blanco.

Ten en cuenta que…

Las celdas diagonales también se consideran adyacentes.
El tablero siempre tendrá al menos una celda vacía y un juguete saboteado *.
El tablero puede tener cualquier tamaño.
Los números son cadenas de texto.
*/

console.log(revealSabotage([
    ['*', ' ', ' ', ' '],
    [' ', ' ', '*', ' '],
    [' ', ' ', ' ', ' '],
    ['*', ' ', ' ', ' ']
]))
/* Debería mostrar:
[
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
]
*/

function revealSabotage(store) {
    let result = store
    const cols = store[0].length
    const rows = store.length
    const dx = [-1, 0, 1, -1, 1, -1, 0, 1]
    const dy = [-1, -1, -1, 0, 0, 1, 1, 1]
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (store[i][j] === '*') continue
            let count = 0
            for (let k = 0; k < 8; k++) {
                const ni = i + dx[k]
                const nj = j + dy[k]
                if (ni >= 0 && ni < rows && nj >= 0 && nj < cols && store[ni][nj] === '*') {
                    count ++
                }
            }
            result[i][j] = count > 0 ? String(count) : ' '
        }
    }
    return result
}