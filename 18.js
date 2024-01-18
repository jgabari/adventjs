/*
En la fábrica de juguetes, los elfos están programando un reloj digital
para mantenerse en horario con la producción de regalos. Sin embargo, se
han encontrado con un desafío de programación interesante. Necesitan una
función que, dada una hora en formato 'HH:MM', cree una representación
visual de esta hora en un reloj digital devolviendo un array de arrays
de caracteres.

La pantalla del reloj tiene 7 filas y 17 columnas, y cada dígito de la hora
ocupa 7 filas y 3 columnas. Los dígitos están compuestos por asteriscos (*)
y espacios en blanco (). Entre cada dígito hay una columna vacía.

Los dos puntos para separar horas y minutos se dibujan usando dos asteríscos
(*) y siempre se colocan en la misma posición, en las filas 2 y 4, en la
columna 9, respectivamente (nota: la indexación de filas y columnas comienza
en 0).
*/

console.log(drawClock('01:30'))
/*
[
    ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
    ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
]
*/

function drawClock(time) {
    let clock = [[], [], [], [], [], [], []]
    for (let i = 0; i < time.length; i++) {
        switch (time[i]) {
            case '0':
                clock[0].push('*', '*', '*')
                clock[1].push('*', ' ', '*')
                clock[2].push('*', ' ', '*')
                clock[3].push('*', ' ', '*')
                clock[4].push('*', ' ', '*')
                clock[5].push('*', ' ', '*')
                clock[6].push('*', '*', '*')
                break
            case '1':
                clock[0].push(' ', ' ', '*')
                clock[1].push(' ', ' ', '*')
                clock[2].push(' ', ' ', '*')
                clock[3].push(' ', ' ', '*')
                clock[4].push(' ', ' ', '*')
                clock[5].push(' ', ' ', '*')
                clock[6].push(' ', ' ', '*')
                break
            case '2':
                clock[0].push('*', '*', '*')
                clock[1].push(' ', ' ', '*')
                clock[2].push(' ', ' ', '*')
                clock[3].push('*', '*', '*')
                clock[4].push('*', ' ', ' ')
                clock[5].push('*', ' ', ' ')
                clock[6].push('*', '*', '*')
                break
            case '3':
                clock[0].push('*', '*', '*')
                clock[1].push(' ', ' ', '*')
                clock[2].push(' ', ' ', '*')
                clock[3].push('*', '*', '*')
                clock[4].push(' ', ' ', '*')
                clock[5].push(' ', ' ', '*')
                clock[6].push('*', '*', '*')
                break
            case '4':
                clock[0].push('*', ' ', '*')
                clock[1].push('*', ' ', '*')
                clock[2].push('*', ' ', '*')
                clock[3].push('*', '*', '*')
                clock[4].push(' ', ' ', '*')
                clock[5].push(' ', ' ', '*')
                clock[6].push(' ', ' ', '*')
                break
            case '5':
                clock[0].push('*', '*', '*')
                clock[1].push('*', ' ', ' ')
                clock[2].push('*', ' ', ' ')
                clock[3].push('*', '*', '*')
                clock[4].push(' ', ' ', '*')
                clock[5].push(' ', ' ', '*')
                clock[6].push('*', '*', '*')
                break
            case '6':
                clock[0].push('*', '*', '*')
                clock[1].push('*', ' ', ' ')
                clock[2].push('*', ' ', ' ')
                clock[3].push('*', '*', '*')
                clock[4].push('*', ' ', '*')
                clock[5].push('*', ' ', '*')
                clock[6].push('*', '*', '*')
                break
            case '7':
                clock[0].push('*', '*', '*')
                clock[1].push(' ', ' ', '*')
                clock[2].push(' ', ' ', '*')
                clock[3].push(' ', ' ', '*')
                clock[4].push(' ', ' ', '*')
                clock[5].push(' ', ' ', '*')
                clock[6].push(' ', ' ', '*')
                break
            case '8':
                clock[0].push('*', '*', '*')
                clock[1].push('*', ' ', '*')
                clock[2].push('*', ' ', '*')
                clock[3].push('*', '*', '*')
                clock[4].push('*', ' ', '*')
                clock[5].push('*', ' ', '*')
                clock[6].push('*', '*', '*')
                break
            case '9':
                clock[0].push('*', '*', '*')
                clock[1].push('*', ' ', '*')
                clock[2].push('*', ' ', '*')
                clock[3].push('*', '*', '*')
                clock[4].push(' ', ' ', '*')
                clock[5].push(' ', ' ', '*')
                clock[6].push('*', '*', '*')
                break
            case ':':
                clock[0].push(' ')
                clock[1].push(' ')
                clock[2].push('*')
                clock[3].push(' ')
                clock[4].push('*')
                clock[5].push(' ')
                clock[6].push(' ')
                break
        }
        if (i < time.length - 1) {
            clock[0].push(' ')
            clock[1].push(' ')
            clock[2].push(' ')
            clock[3].push(' ')
            clock[4].push(' ')
            clock[5].push(' ')
            clock[6].push(' ')
        }
    }
    return clock
}