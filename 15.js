/*
Estamos programando unos robots llamados giftbot 🤖🎁 que navegan de forma
autónoma por los almacenes de regalos.

Estamos creando una función a la que le pasamos: el almacén 🏬 que deben
navegar y los movimientos ↔️ que pueden realizar.

El almacén se representa como un array de cadenas de texto, donde:

. significa que hay vía libre.
* significa que hay un obstáculo.
! es la posición inicial del robot.
Los movimientos son un array de cadenas de texto, donde:

R mueve al robot una posición a la derecha.
L mueve al robot una posición a la izquierda.
U mueve al robot una posición hacia arriba.
D mueve al robot una posición hacia abajo.
Hay que tener en cuenta que el robot no puede superar los obstáculos ni los
límites del almacén.

Dados un almacén y los movimientos, debemos devolver el array con la posición
final de nuestro robot.

Ten en cuenta que la store es un array que puede ser de un número de filas que
va de 1 a 100, ya que tenemos almacenes de todos los tamaños.

También que el robot es posible que termine en su posición inicial si no puede
moverse o si está dando vueltas.
*/

const store = ['..!....', '...*.*.']

const movements = ['R', 'R', 'D', 'L']
const result = autonomousDrive(store, movements)
console.log(result)
/*
[
    ".......",
    "...*!*."
]
*/
// El último movimiento es hacia la izquierda, pero no puede moverse porque hay un obstáculo.

function autonomousDrive(store, movements) {
    let position = []
    let aisle = store[0].length
    for (let i = 0; i < store.length; i++) {
        const robot = store[i].indexOf('!')
        if (robot !== -1) {
            position.push(i)
            position.push(robot)
        }
    }
    store[position[0]] = store[position[0]].replace('!', '.')
    for (let movement of movements) {
        if (movement === 'R') {
            if (position[1] < aisle - 1 && store[position[0]][position[1] + 1] !== '*') position[1]++
        } else if (movement === 'L') {
            if (position[1] > 0 && store[position[0]][position[1] - 1] !== '*') position[1]--
        } else if (movement === 'U') {
            if (position[0] > 0 && store[position[0] - 1][position[1]] !== '*') position[0]--
        } else if (movement === 'D') {
            if (position[0] < store.length - 1 && store[position[0] + 1][position[1]] !== '*')position[0]++
        }
    }
    let aux = store[position[0]].split('')
    aux[position[1]] = '!'
    store[position[0]] = aux.join('')
    return store
}