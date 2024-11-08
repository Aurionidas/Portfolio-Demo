const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth - 20
canvas.height = innerHeight - 50

let bolas = []

for (let i = 0; i < 60; i++)
    bolas.push(new Bola(canvas.width/2, canvas.height/2))


function animar(){


    ctx.clearRect(0, 0, canvas.width, canvas.height)

    bolas.forEach(bola => {
        bola.dibujar()
        bola.mover()
    })

    requestAnimationFrame(animar)
}

animar()