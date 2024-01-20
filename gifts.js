const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5

const giftIds4 = [5, 1, 2, 3, 2, 5, 1]
const firstRepeatedId4 = findFirstRepeated(giftIds4)
console.log(firstRepeatedId4) // 2

const giftIds5 = [2, 2]
const firstRepeatedId5 = findFirstRepeated(giftIds5)
console.log(firstRepeatedId5) // 2


function findFirstRepeated(gifts) {
    // Code here
    let repIndex = gifts.length;
    let reps = [];
    for (let i = 0; i < repIndex; i++) {
        for (let j = 0; j < gifts.length; j++) {
            if (gifts[i] === gifts[j]) {
                if (i !== j) {
                    if (reps.includes(gifts[j])) {
                    } else {
                        if (j < repIndex) {
                            repIndex = j;
                            reps.push(gifts[j]);
                        }
                    }
                }
            }


        }
    }
    if (repIndex >= gifts.length) {
        return -1;
    } else {
        return gifts[repIndex];
    }
}

