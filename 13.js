/*

Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcular si van sobrados o no de tiempo ⏳.

Para ello te pasan un array con la duración de cada entrega.El formato de la duración es HH: mm: ss, las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.

Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas.El formato de la duración devuelta debe ser HH: mm: ss.

Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo.Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01: 30:00

*/

console.log(calculateTime(['01:00:00', '01:00:00']))

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))
// '-02:20:00'

console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00']))
// '00:30:00'

console.log(calculateTime([
    '00:45:00',
    '00:45:00',
    '00:00:30',
    '00:00:30'
])) // '-05:29:00'

function calculateTime(deliveries) {
    const limitSeconds = 60 * 60 * 7
    let deliveryHours = 0
    let deliveryMinutes = 0
    let deliverySeconds = 0
    for (const delivery of deliveries) {
        const [hours, minutes, seconds] = delivery.split(':').map(Number)
        deliveryHours += hours
        deliveryMinutes += minutes
        deliverySeconds += seconds
    }
    const totalSeconds = deliverySeconds + (60 * deliveryMinutes) + (60 * 60 * deliveryHours)
    let totalRemainingSeconds = limitSeconds - totalSeconds
    const sign = totalRemainingSeconds > 0 ? '-' : ''
    totalRemainingSeconds = Math.abs(totalRemainingSeconds)

    const remainingHours = Math.floor(totalRemainingSeconds / (60 * 60))
    const remainingMinutes = Math.floor((totalRemainingSeconds % (60 * 60)) / 60)
    const remainingSeconds = Math.floor((totalRemainingSeconds % 60))

    const formattedHours = remainingHours.toString().padStart(2, '0')
    const formattedMinutes = remainingMinutes.toString().padStart(2, '0')
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0')
    return `${sign}${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}