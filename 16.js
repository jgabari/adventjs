/*

El problema es que el formato de los árboles ha cambiado. Es un array de números… ¡pero debería ser un objeto! Por ejemplo el árbol: [3, 1, 0, 8, 12, null, 1] se ve así:

//        3
//      /   \
//     1     0
//    / \     \
//   8  12     1
Lo que necesitamos es transformar el array en un objeto donde cada nodo del árbol tiene las propiedades value, left y right.

{
    value: 3,
    left: {
    value: 1,
    left: {
        value: 8,
        left: null,
        right: null
    },
    right: {
        value: 12,
        left: null,
        right: null
    }
    },
    right: {
    value: 0,
    left: null,
    right: {
        value: 1,
        left: null,
        right: null
    }
    }
}

*/

function transformTree(tree) {
    function buildTree(i) {
        if (i >= tree.length || tree[i] === null) {
            return null
        }
        const branch = {
            value: tree[i],
            left: buildTree(2 * i + 1),
            right: buildTree(2 * i + 2)
        }
        return branch
    }
    return buildTree(0)
}

console.log(transformTree([3, 1, 0, 8, 12, null, 1]))

/*
{
    value: 3,
    left: {
        value: 1,
        left: {
            value: 8,
            left: null,
            right: null
        },
        right: {
            value: 12,
            left: null,
            right: null
        }
    },
    right: {
        value: 0,
        left: null,
        right: {
            value: 1,
            left: null,
            right: null
        }
    }
}
*/