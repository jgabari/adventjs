const road = 'S..|...|..'
const time = 10 // unidades de tiempo
console.log(cyberReindeer(road, time))

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/

function cyberReindeer(road, time) {
    let result = [road]
    for (let i = 1; i < time; i++) {
        if (i === 5) {
            road = road.replaceAll('|', '*')
        }
        if (road.includes('S.')) {
            road = road.replace('S.', '.S')
        }else if (road.includes('S*')) {
            road = road.replace('S*', '.S')
        }
        result.push(road)
    }
    return result
}