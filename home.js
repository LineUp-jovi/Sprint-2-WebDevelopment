const imagem = document.getElementById("imagem-prototipo")

const imagens = [
    "./images/modoDocumento.png",
    "./images/modoExpressão1.png",
    "./images/modoExpressão2.png",
    "./images/modoExpressão3.png",
    "./images/modoExpressão4.png",
    "./images/assistenteDeIA.png",
    "./images/botãoInformação.png"
]

let indice = 0

document.querySelector(".next").addEventListener("click", () => {

    indice++

    if(indice >= imagens.length){
        indice = 0
    }

    imagem.src = imagens[indice]
})

document.querySelector(".prev").addEventListener("click", () => {

    indice--

    if(indice < 0){
        indice = imagens.length - 1
    }

    imagem.src = imagens[indice]
})