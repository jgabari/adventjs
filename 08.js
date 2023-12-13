function organizeGifts(gifts) {
    let result = '';
    let matches = gifts.match(/(\d+)([a-z])/g);

    for (let match of matches) {
        let num = parseInt(match.match(/\d+/)[0]);
        let giftType = match.match(/[a-z]/)[0];

        let pallets = Math.floor(num / 50);
        num %= 50;
        let boxes = Math.floor(num / 10);
        num %= 10;

        let pallet = '[' + giftType + ']'
        let box = '{' + giftType + '}'
        result += pallet.repeat(pallets);
        result += box.repeat(boxes);
        if (num !== 0) {
            result += '(' + giftType.repeat(num) + ')';
        }
    }
    return result;
}

const result1 = organizeGifts('76a11b');
console.log(result1);  // '[a]{a}{a}(aaaaaa){b}(b)'
