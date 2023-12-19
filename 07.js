function drawGift(size, symbol) {
    if (size === 1) return "#\n"

    let result = '';

    // linea de arriba
    for (let i = 0; i < size - 1; i++) {
        result += ' ';
    }
    for (let i = 0; i < size; i++) {
        result += '#';
    }
    result += '\n';

    // cuerpo del regalo parte de arriba
    for (let i = 0; i < size - 2; i++) {
        for (let j = 0; j < size - 2 - i; j++) {
            result += ' ';
        }
        result += '#'
        for (let i = 0; i < size - 2; i++) {
            result += symbol;
        }
        result += '#';
        for (let j = 0; j < i; j++) {
            result += symbol
        }
        result += '#\n';
    }

    // linea de en medio
    for (let i = 0; i < size; i++) {
        result += '#'
    }
    for (let i = 0; i < size - 2; i++) {
        result += symbol
    }
    result += '#\n'

    // cuerpo del regalo parte de abajo
    for (let i = 0; i < size - 2; i++) {
        result += '#'
        for (let i = 0; i < size - 2; i++) {
            result += symbol;
        }
        result += '#';
        for (let j = 0; j < size - 3 - i; j++) {
            result += symbol
        }
        result += '#\n';
    }


    // linea de abajo
    for (let i = 0; i < size; i++) {
        result += '#';
    }
    result += '\n'
    return result;
}

console.log(drawGift(6, '*'))