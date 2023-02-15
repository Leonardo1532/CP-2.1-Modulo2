let Imagem = document.querySelectorAll('img[src="./imagemVazia.png"]')

for (let index = 0; index < Imagem.length; index++) {
    Imagem[index].addEventListener('click', (event) => {
        event.target.src = "./imagemcheia.png";
    })
}


let Imagem2 = document.querySelectorAll('img[src="./estrelaVazia.png"]')

Imagem2[0].addEventListener("click", (event) => {
    Imagem2[0].src = "./EstrelaCheia.png"
})

Imagem2[1].addEventListener("click", (event) => {
    Imagem2[0].src = "./EstrelaCheia.png"
    Imagem2[1].src = "./EstrelaCheia.png"
})

Imagem2[2].addEventListener("click", (event) => {
    Imagem2[0].src = "./EstrelaCheia.png"
    Imagem2[1].src = "./EstrelaCheia.png"
    Imagem2[2].src = "./EstrelaCheia.png"
})

Imagem2[3].addEventListener("click", (event) => {
    Imagem2[0].src = "./EstrelaCheia.png"
    Imagem2[1].src = "./EstrelaCheia.png"
    Imagem2[2].src = "./EstrelaCheia.png"
    Imagem2[3].src = "./EstrelaCheia.png"
})

Imagem2[4].addEventListener("click", (event) => {
    Imagem2[0].src = "./EstrelaCheia.png"
    Imagem2[1].src = "./EstrelaCheia.png"
    Imagem2[2].src = "./EstrelaCheia.png"
    Imagem2[3].src = "./EstrelaCheia.png"
    Imagem2[4].src = "./EstrelaCheia.png"
})

let change = document.querySelectorAll('input[type="radio"]')
let change2 = document.querySelectorAll('input[type="checkbox"]')

function handleChange(event) {
    console.log("Recomendação:", event.target.value);
}
function handleChange2(event) {
    console.log("Classificação:", event.target.value);
}

for (let index = 0; index < change.length; index++) {
    change[index].addEventListener("change", handleChange2)
}
for (let index = 0; index < change2.length; index++) {
    change2[index].addEventListener("change", handleChange2)
}
