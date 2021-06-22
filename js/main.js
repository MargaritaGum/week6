const canvas = document.querySelector("#canvas")
canvas.style.backgroundColor = 'pink'
const ctx = canvas.getContext('2d')

//Прямоугольник
ctx.fillStyle = 'gray'
ctx.fillRect(20, 20, 260, 50)

//Текст
ctx.font = `20px monospace`
ctx.fillStyle = 'black'
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillText('Hello, World', 150, 50)

//Прямоугольный контур
ctx.strokeStyle = 'black'
ctx.linewidth = 5
ctx.strokeRect(20, 20, 260, 260)

//Линия
ctx.strokeStyle = 'black'
ctx.linewidth = 5
ctx.beginPath()
ctx.moveTo(20, 70)
ctx.lineTo(280, 280)
ctx.lineTo(20, 280)
ctx.lineTo(280, 70)
ctx.stroke()
