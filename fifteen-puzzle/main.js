const restart = document.querySelector('.restart')
const pause = document.querySelector('.pause')
const cells = document.querySelectorAll('.single-cell')

//////////////////////////
//Randomize the numbers
//////////////////////////

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

let order
function fillCells() {
  //create a random array of elements 0-16
  order = arrayRandom(16)

  //fill the cells
  for (let i = 0; i < 16; i++) {
    if (order[i] == 0) {
      cells[i].innerHTML = ''
    } else {
      cells[i].innerHTML = `<div class="single-item">${order[i]}</div>`
    }
  }
}

//when the page loads
fillCells()

//when the restart button is clicked
restart.addEventListener('click', fillCells)

//////////////////////////
//Click the items
//////////////////////////

function clickNumbers() {
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('single-item')) {
      const currentIndex = order.indexOf(Number(e.target.innerHTML))

      //right
      if (order[currentIndex - 1] == 0 && currentIndex % 4 !== 0) {
        //change items on the screen
        cells[currentIndex - 1].innerHTML = cells[currentIndex].innerHTML
        cells[currentIndex].innerHTML = ''
        //change items in the order array
        order[currentIndex - 1] = order[currentIndex]
        order[currentIndex] = 0
      }

      //left
      if (order[currentIndex + 1] == 0 && (currentIndex + 1) % 4 !== 0) {
        //change items on the screen
        cells[currentIndex + 1].innerHTML = cells[currentIndex].innerHTML
        cells[currentIndex].innerHTML = ''
        //change items in the order array
        order[currentIndex + 1] = order[currentIndex]
        order[currentIndex] = 0
      }

      //up
      if (order[currentIndex - 4] == 0) {
        //change items on the screen
        cells[currentIndex - 4].innerHTML = cells[currentIndex].innerHTML
        cells[currentIndex].innerHTML = ''
        //change items in the order array
        order[currentIndex - 4] = order[currentIndex]
        order[currentIndex] = 0
      }

      //down
      if (order[currentIndex + 4] == 0) {
        //change items on the screen
        cells[currentIndex + 4].innerHTML = cells[currentIndex].innerHTML
        cells[currentIndex].innerHTML = ''
        //change items in the order array
        order[currentIndex + 4] = order[currentIndex]
        order[currentIndex] = 0
      }
      checkCorrectPosition()
    }
  })
}
clickNumbers()

//////////////////////////
//Add "green" color
//////////////////////////

function checkCorrectPosition() {
  const items = document.querySelectorAll('.single-item')
  items.forEach((e) => {
    if (Number(e.innerHTML) == order.indexOf(Number(e.innerHTML)) + 1) {
      e.style.background = 'green'
    } else {
      e.style.background = '#505050'
    }
  })
}
