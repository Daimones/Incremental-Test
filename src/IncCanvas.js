export var resize = function() {
    width = window.innerWidth * 2
    height = window.innerHeight * 2
    canvas.width = width
    canvas.height = height
  }
  window.onresize = resize
  resize()
  
  ctx.fillStyle = 'red'
  
  var state = {
    x: (width / 2),
    y: (height / 2),
  }
  
  export function update(progress) {
    state.x += progress
    if (state.x > width) {
      state.x -= width;
    }
  }
  
  export function draw() {
    ctx.clearRect(0, 0, width, height)
  
    ctx.fillRect(state.x - 10, state.y - 10, 20, 20)
  }
  
  export function loop(timestamp) {
    var progress = (timestamp - lastRender)
  
    update(progress)
    draw()
    
    lastRender = timestamp
    window.requestAnimationFrame(loop)
  }
  var lastRender = 0
  window.requestAnimationFrame(loop)
  document.body.appendChild(component())