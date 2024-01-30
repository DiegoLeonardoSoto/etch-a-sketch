const container = document.querySelector('.container')

function squareHovering(e) {
  this.style.backgroundColor = 'black'
}

const createGrid = (area = 16) => {
  for (let i = 0; i < area * area; i++) {
    let square = document.createElement('div')
    square.className = 'square'
    square.style.width = `${100 / area}%`
    square.style.height = `${100 / area}% `
    square.addEventListener('mouseenter', squareHovering)
    container.appendChild(square)
  }
}

createGrid()

function getSize() {
  let area = Number(prompt('Enter a size lower that 100'))

  if (area > 0 && area < 100) {
    container.innerHTML = ''
    createGrid(area)
  } else {
    alert('Size must be a number greater than 0 and lower than 100')
  }
}

const changeSizeBtn = document.querySelector('#changeSizeBtn')

changeSizeBtn.addEventListener('click', getSize)
