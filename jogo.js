var altura = 0
var largura = 0
var vidas= 1
var tempo = 15

var mosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){

    mosquitoTempo = 1500
}else if(nivel === 'dificil'){
    mosquitoTempo = 1000
}else if(nivel === 'hard'){
    mosquitoTempo = 750
}

function ajustaTamanhoJogo(){
altura = window.innerHeight
largura = window.innerWidth
console.log(largura, altura)
}

ajustaTamanhoJogo()

var cronometro = setInterval(function(){
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else{
    document.getElementById('cronometro').innerHTML = tempo
    }
    
}, 1000)

function posicaoRandomica(){
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        } else {
        document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

        vidas++
    }
}

    
var posicaox = Math.floor(Math.random() * largura) - 70
var posicaoY = Math.floor(Math.random() * altura) - 80

posicaox = posicaox < 0 ? 0 : posicaox
posicaox = posicaoY< 0 ? 0 : posicaoY

console.log(posicaox, posicaoY)

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaox + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position =  'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
    this.remove()
}

document.body.appendChild(mosquito)

console.log(ladoAleatorio())



}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }
}
