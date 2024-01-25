/*
Ya ha entregado Santa Claus 🎅 todos los regalos a los niños pero quieren revisar si
pueden mejorar de cara al año que viene.

Los elfos quieren saber cuántos movimientos ha hecho Santa Claus 🛷 para entregar todos
los regalos. Para ello, te dan un mapa de la ciudad con la ubicación de cada niño y de Santa.

El mapa es una cadena de texto multi línea donde cada caracter representa una casilla.
Los niños se representan por números del 1 al 9 y Santa Claus por la letra S. El resto de
casillas son .

Santa Claus sólo puede moverse hacia arriba, abajo, izquierda o derecha, y cada
movimiento cuenta como 1 km. Además, siempre empieza en la posición S y debe entregar los
regalos en orden, del 1 al 9.

Escribe una función travelDistance que reciba un mapa y devuelva la distancia total que
ha recorrido Santa Claus según la posición de los niños.

Ten en cuenta que:

El mapa no tiene por qué ser cuadrado.
El mapa siempre tendrá al menos un niño.
El mapa siempre tendrá una posición inicial para Santa Claus.
Los números de los niños nunca se repiten.
*/

const result = travelDistance(`.....1....
..S.......
..........
....3.....
......2...`)
console.log(result) // -> 12

const result2 = travelDistance(`..S.1...`)
console.log(result2) // -> 2

// function travelDistance(map) {
//     let result = 0
//     let streetLength = 0
//     if (map.includes('\n')) {
//         streetLength = map.indexOf('\n')
//     } else {
//         streetLength = map.length
//     }
//     const mapArray = map.split('\n')
//     const straightMap = mapArray.join('')
//     for (let i = 1;; i++) {
//         let distance = Math.abs(straightMap.indexOf(i.toString()) - straightMap.indexOf('S'))
//         if (distance >= streetLength) {
//             let streets = Math.floor(distance/streetLength)
//             result += streets + (distance - (streets*streetLength))
//         } else {
//             result += distance
//         }
//         if (!(straightMap.includes(i+1))) {
//             break
//         }
//     }
//     return result
// }

function travelDistance(map) {
    let result = 0
    const mapArray = map.split('\n')
    const mapString = mapArray.join('')
    for (let i = 1;; i++) {
        let kidDoor = -1
        let kidStreet = -1
        let santaDoor = -1
        let santaStreet = -1
        for (let j = 0; j < mapArray.length; j++) {
            let st = mapArray[j]
            if (st.includes(i)) {
                kidDoor = st.indexOf(i)
                kidStreet = j
                mapArray[kidStreet].replace(i, 'S')
            }
            if (st.includes('S')) {
                santaDoor = st.indexOf('S')
                santaStreet = j
                mapArray[santaStreet].replace('S', '.')
            }
        }
        result += (Math.abs(kidDoor - santaDoor)) + (Math.abs(kidStreet - santaStreet))
        if (!(mapString.includes(i+1))) break
    }
    return result
}