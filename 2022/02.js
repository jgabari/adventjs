console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
  ])) // true

  const boxes1 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
  ]
  
  console.log(fitsInOneBox(boxes1)) // false

  const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]
  
  console.log(fitsInOneBox(boxes)) // true

//___________________________________________________________

function fitsInOneBox(boxes) {
    let result = false
    for (let box of boxes) {
        
    }
    return result
  }