const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// el pack de regalos pesa 4 + 4 + 4 = 12
// los renos pueden llevar (2 * 6) + (2 * 6) = 24
// por lo tanto, Santa Claus puede entregar 2 cajas de regalos

console.log(distributeGifts(packOfGifts, reindeers)) // 2

function distributeGifts(packOfGifts, reindeers) {
    let gifts = 0;
    for (let gift of packOfGifts)gifts += gift.length
    console.log(gifts)
    let possible = 0;
    for (let reindeer of reindeers) possible += reindeer.length
    console.log(possible)
    return 2*possible/gifts
  }