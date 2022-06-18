const restart = document.querySelector('.restart')
const pause = document.querySelector('.pause')
const cells = document.querySelectorAll('.single-cell')
const items = document.querySelectorAll('.single-item')

//randomize indexes of any array by length
function arrayRandom(length) {
  let arr = []
  while (arr.length < length) {
    const newNumber = Math.floor(Math.random() * length)
    if (!arr.includes(newNumber)) {
      arr.push(newNumber)
    }
  }
  return arr
}

console.log(arrayRandom(15))
