/*
¡Santa 🎅 está organizando una gran cena navideña 🫓 y quiere asegurarse de que todos los
platos sean únicos y variados!

Te da una lista de platos navideños donde cada elemento consiste en una lista de strings
que comienza con el nombre del plato, seguido de todos los ingredientes utilizados para
su preparación.

Tienes que escribir una función que agrupe los platos por ingredientes siempre que haya
al menos 2 platos que los contengan.

Así que devolvemos un array de arrays donde la primera posición es el nombre del
ingrediente y el resto los nombres de los platos.

Tanto la lista de ingredientes como los platos deben estar ordenados alfabéticamente.

Ten en cuenta que:

Todos los nombres de los platos son diferentes.
Los nombres de los ingredientes para un plato dado son distintos entre sí.
Si no hay ingredientes repetidos, devolvemos un array vacío.
*/

const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
]

console.log(organizeChristmasDinner(dishes))

/*

"sauce" está en 2 platos: "christmas turkey" y "pizza".
"sugar" está en 2 platos: "cake" y "hot chocolate".
El resto de ingredientes solo aparecen en un plato, por lo que no los mostramos.

Enseñamos primero "sauce" porque alfabéticamente está antes que "sugar".
Y los platos de cada ingrediente también están ordenados alfabéticamente.

[
    ["sauce", "christmas turkey", "pizza"],
    ["sugar", "cake", "hot chocolate"]
]
*/

function organizeChristmasDinner(dishes) {
    let result = []
    let list = []
    let resultingredients = []
    for (let dish of dishes) {
        let ingredients = dish.slice(1)
        for (let ingredient of ingredients) {
            if (list.includes(ingredient)) {
                if (!(resultingredients.includes(ingredient))) {
                    resultingredients.push(ingredient)
                }
            } else {
                list.push(ingredient)
            }
        }
    }
    resultingredients.sort()
    for (let i = 0; i < resultingredients.length; i++) {
        let ingredient = resultingredients[i]
        result.push([ingredient])
        let disheslist = []
        for (let dish of dishes) {
            if (dish.includes(ingredient)) {
                disheslist.push(dish[0])
            }
        }
        disheslist.sort()
        result[i].push(...disheslist)
    }
    return result
}