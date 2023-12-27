/*
En el Polo Norte todavía usan fotocopiadoras de papel. Los elfos las usan para copiar las cartas que los niños envían a Santa y así poder enviarlas a todos los departamentos de regalos.

Sin embargo ya son muy viejas y no funcionan muy bien. Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pérdida generacional.

Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas, pero puedes compararlas con un algoritmo.

Existe una gran probabilidad de que un caracter se degrade en cada copia (¡no pasa siempre!). Y al ocurrir, la regla que sigue es:

Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
Una vez degradadas las letras en los símbolos, se pueden continuar degradando.
Ten en cuenta que el último es un espacio en blanco, no un caracter vacío.
Los caracteres que no son letras (como los dígitos) no se degradan.
Sabiendo esto y recibiendo dos cartas. La supuesta original y la copia. Debes determinar si la copia es una copia de la otra.

Para entender cómo funcionan las fotocopiadoras y su degradación, mira este ejemplo:

original:  'Santa Claus'
1ª copia:  'santa cla#s'
2ª copia:  'sa#t# cl#+s'
3ª copia:  'sa+## c#+:s'
4ª copia:  's#++. c+:.s'
5ª copia:  's#+:. c:. s'
Por lo tanto s#+:. c+:++ es una copia válida de Santa Claus. Y, como ves, la degradación de las letras no se produce en un orden específico, es aleatorio.

Basado en el desafío de CodeWars Photocopy decay
*/
// console.log(checkIsValidCopy(
//     'Santa Claus is coming',
//     'sa#ta Cl#us i+ comin#'
// )) // true
// console.log(checkIsValidCopy(
//     's#nta Cla#s is coming',
//     'p#nt: cla#s #s c+min#'
// )) // false (por la p inicial)
// console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
// console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)
console.log(checkIsValidCopy('s+#:.#c:. s', 's#+:.#c:. s')) // false (hay un # donde no debería)
// console.log(checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')) // false (hay un # donde no debería)

function checkIsValidCopy(original, copy) {
    const validChars = ['#', '+', ':', '.', ' ']
    if (copy.length !== original.length) return false
    for (let i = 0; i < copy.length; i++) {
        if (original[i] === ' ' && copy[i] !== ' ') return false
        if (original[i] !== copy[i]) {
            if (validChars.includes(copy[i]) || copy[i] === original[i].toLowerCase()) {
                if (validChars.includes(copy[i]) && validChars.includes(original[i])) {
                    if (validChars.indexOf(copy[i]) < validChars.indexOf(original[i])) return false
                }
            } else {
                return false
            }
        }
    }
    return true
}