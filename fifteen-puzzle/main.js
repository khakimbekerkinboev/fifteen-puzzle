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

let grid
function fillCells() {
  //create a random array of elements 0-16
  grid = arrayRandom(16)

  //fill the cells
  for (let i = 0; i < 16; i++) {
    if (grid[i] == 0) {
      cells[i].innerHTML = ''
    } else {
      cells[i].innerHTML = `<div class="single-item">${grid[i]}</div>`
    }
  }

  //click numbers function
  clickNumbers()
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
    const currentIndex = grid.indexOf(Number(e.target.innerHTML))

    if (grid[currentIndex - 1] == 0 && currentIndex % 4 !== 0) {
      //change items on the screen
      cells[currentIndex - 1].innerHTML = cells[currentIndex].innerHTML
      cells[currentIndex].innerHTML = ''
      //change items in the grid array
      grid[currentIndex - 1] = grid[currentIndex]
      grid[currentIndex] = 0
    }

    if (grid[currentIndex + 1] == 0 && (currentIndex + 1) % 4 !== 0) {
      //change items on the screen
      cells[currentIndex + 1].innerHTML = cells[currentIndex].innerHTML
      cells[currentIndex].innerHTML = ''
      //change items in the grid array
      grid[currentIndex + 1] = grid[currentIndex]
      grid[currentIndex] = 0
    }

    if (grid[currentIndex - 4] == 0) {
      //change items on the screen
      cells[currentIndex - 4].innerHTML = cells[currentIndex].innerHTML
      cells[currentIndex].innerHTML = ''
      //change items in the grid array
      grid[currentIndex - 4] = grid[currentIndex]
      grid[currentIndex] = 0
    }

    if (grid[currentIndex + 4] == 0) {
      //change items on the screen
      cells[currentIndex + 4].innerHTML = cells[currentIndex].innerHTML
      cells[currentIndex].innerHTML = ''
      //change items in the grid array
      grid[currentIndex + 4] = grid[currentIndex]
      grid[currentIndex] = 0
    }
  })
}
