let velocidade = localStorage.getItem("nivel")

let clicou = true
let score = 0
let vidas = 3

let body = document.querySelector("body")

let img = document.createElement("img")
img.src = "imagens/mosquito.png"
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

img.addEventListener("click",function(){
 clicou = true
 img.remove()
 ganharPonto()
})

function ganharPonto(){
  score += 100
  let domScore = document.getElementById("score-real")
  domScore.innerText = score
}

setInterval(function(){
    alteraTamanhoMosquito()
    geraPosicao()

    body.appendChild(img)

    if(!clicou){
      vidas--

      if(vidas == 2){
        let gorro3 = document.getElementById("gorro-3")
        gorro3.src = "imagens/gorro_vazio.png"      
      }
      else if(vidas == 1){
        let gorro2 = document.getElementById("gorro-2")
        gorro2.src = "imagens/gorro_vazio.png"  
      }
      else if(vidas == 0){
        let gorro1 = document.getElementById("gorro-1")
        gorro1.src = "imagens/gorro_vazio.png"  
                
        localStorage.setItem(
          'score',
          {
            lastScore: score
          }
        )

        setTimeout(function(){
          location.href = "gameover.html"
        },1200)
       
      }
    }

    clicou = false

}, 500 * velocidade)




//Isso adiciona um elemento no body [h1, p, div, etc]

