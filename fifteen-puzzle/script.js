const restart = document.querySelector('.restart')
const pause = document.querySelector('.pause')
const container = document.querySelector('.container')
const cells = document.querySelectorAll('.single-cell')
const time = document.querySelector('#time')
const moves = document.querySelector('#moves')
const pauseModal = document.querySelector('.pause-modal')
const playBtn = document.querySelector('.play-btn')
const lightSwitch = document.querySelector('.light-switch')

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

  //change the background color of the item if it's in the correct position
  checkCorrectPosition()

  //initial number of moves is 0
  moves.innerHTML = 0

  //stop counting
  time.classList.remove('counting')
  time.innerHTML = 0
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
        //increase the number of moves by 1 in each click
        moves.innerHTML++
        //start counting in the first click
        time.classList.add('counting')
      }

      //left
      if (order[currentIndex + 1] == 0 && (currentIndex + 1) % 4 !== 0) {
        //change items on the screen
        cells[currentIndex + 1].innerHTML = cells[currentIndex].innerHTML
        cells[currentIndex].innerHTML = ''
        //change items in the order array
        order[currentIndex + 1] = order[currentIndex]
        order[currentIndex] = 0
        //increase the number of moves by 1 in each click
        moves.innerHTML++
        //start counting in the first click
        time.classList.add('counting')
      }

      //up
      if (order[currentIndex - 4] == 0) {
        //change items on the screen
        cells[currentIndex - 4].innerHTML = cells[currentIndex].innerHTML
        cells[currentIndex].innerHTML = ''
        //change items in the order array
        order[currentIndex - 4] = order[currentIndex]
        order[currentIndex] = 0
        //increase the number of moves by 1 in each click
        moves.innerHTML++
        //start counting in the first click
        time.classList.add('counting')
      }

      //down
      if (order[currentIndex + 4] == 0) {
        //change items on the screen
        cells[currentIndex + 4].innerHTML = cells[currentIndex].innerHTML
        cells[currentIndex].innerHTML = ''
        //change items in the order array
        order[currentIndex + 4] = order[currentIndex]
        order[currentIndex] = 0
        //increase the number of moves by 1 in each click
        moves.innerHTML++
        //start counting in the first click
        time.classList.add('counting')
      }
      //change the background color of the item if it's in the correct position
      checkCorrectPosition()
    }
  })
}
clickNumbers()

//////////////////////////
//Change background color
//////////////////////////

function checkCorrectPosition() {
  const items = document.querySelectorAll('.single-item')
  items.forEach((e) => {
    if (Number(e.innerHTML) == order.indexOf(Number(e.innerHTML)) + 1) {
      e.style.background = '#008000'
    } else {
      if (lightSwitch.classList.contains('fa-lightbulb'))
        e.style.background = '#505050'
      if (lightSwitch.classList.contains('fa-moon'))
        e.style.background = '#D3D3D3'
    }
  })
}

//////////////////////////
//Count time
//////////////////////////

function count() {
  if (time.classList.contains('counting')) {
    time.innerHTML++
  }
}

setInterval(count, 1000)

//////////////////////////
//Pause and Play the game
//////////////////////////
pause.addEventListener('click', (e) => {
  if (e.target.innerHTML === 'Pause') {
    pauseModal.classList.remove('modal-inactive')
    time.classList.remove('counting')
    pause.innerHTML = 'Play'
  } else if (e.target.innerHTML === 'Play') {
    pauseModal.classList.add('modal-inactive')
    time.classList.add('counting')
    pause.innerHTML = 'Pause'
  }
})

playBtn.addEventListener('click', () => {
  pauseModal.classList.add('modal-inactive')
  time.classList.add('counting')
  pause.innerHTML = 'Pause'
})

//////////////////////////
//Bright/Dark screen
//////////////////////////

lightSwitch.addEventListener('click', () => {
  if (lightSwitch.classList.contains('fa-lightbulb')) {
    //change icons
    lightSwitch.classList.remove('fa-lightbulb')
    lightSwitch.classList.add('fa-moon')

    //change style
    container.style.backgroundColor = '#FFFFFF'
    document.body.style.color = '#1c1c1c'
    for (let item of document.getElementsByTagName('button')) {
      item.style.color = '#1c1c1c'
    }
    for (let item of document.querySelectorAll('.single-item')) {
      item.style.backgroundColor = '#D3D3D3'
    }
    pauseModal.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'
    checkCorrectPosition()
  } else if (lightSwitch.classList.contains('fa-moon')) {
    //change icons
    lightSwitch.classList.remove('fa-moon')
    lightSwitch.classList.add('fa-lightbulb')

    //change style
    container.style.backgroundColor = '#1c1c1c'
    document.body.style.color = '#d6d3cd'
    for (let item of document.getElementsByTagName('button')) {
      item.style.color = '#d6d3cd'
    }
    for (let item of document.querySelectorAll('.single-item')) {
      item.style.backgroundColor = '#505050'
    }
    pauseModal.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'
    checkCorrectPosition()
  }
})
