
let body = document.querySelector("body")

let img = document.createElement("img")
img.src = "../imagens/mosquito.png"
img.style.position = "absolute"

function alteraTamanhoMosquito(){
  //numero * (max - min) + min
  let numeroAleatorio = Math.random() * (0.6 - 0.2) + 0.2
  img.style.transform = `scale(${numeroAleatorio})`
}

function geraPosicao(){
    let y = Math.random() * (window.innerHeight * 0.70)
    let x = Math.random() * (window.innerWidth * 0.70)

    img.style.top = `${y}px`
    img.style.left = `${x}px`
}

setInterval(function(){
    alteraTamanhoMosquito()
    geraPosicao()
}, 2000)




//Isso adiciona um elemento no body [h1, p, div, etc]
body.appendChild(img)
