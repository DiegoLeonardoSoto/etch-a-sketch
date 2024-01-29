const container = document.querySelector('.container')
const area = 16

for (let i = 0; i < area * area; i++) {
  let square = document.createElement('div')
  square.className = 'square'
  square.style.flex = `1 1 ${500 / (area + 1)}px`
  square.style.height = `${500 / (area + 1)}px`
  container.appendChild(square)
}
