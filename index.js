let foco = document.querySelectorAll('input[type="text"],[type="checkbox"],[type="time"]')


for (let index = 0; index < foco.length; index++) {

    foco[index].addEventListener('focus', (event) => {
        event.target.style.outlineColor = "purple";
    })

    foco[index].addEventListener('blur', (event) => {
        event.target.style.outlineColor = "black";
    })
}


let name = document.querySelectorAll('input[id="cadastroNome"],[id="cadastroEndereco"],[id="cadastroCheckbox1"],[id="cadastroCheckbox2"],[id="cadastroCheckbox3"],[id="cadastroCheckbox4"],[id="cadastroCheckbox5"],[id="cadastroCheckbox6"],[id="cadastroCheckbox7"],[id="openingTime"],[id="closingTime"]');

for (let index = 0; index < name.length; index++) {

    name[index].addEventListener("change", handleChange);

    function handleChange(e) {
        let chave
        if (index == 0) {
            chave = "Nome da Loja"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 1) {
            chave = "Endereço"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 2) {
            chave = "Domingo"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 3) {
            chave = "Segunda"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 4) {
            chave = "Terça"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 5) {
            chave = "Quarta"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 6) {
            chave = "Quinta"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 7) {
            chave = "Sexta"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 8) {
            chave = "Sábado"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 9) {
            chave = "Horário de Abertura"
            window.localStorage.setItem(chave, e.target.value);
        } else if (index == 10) {
            chave = "Horário de Fechamento"
            window.localStorage.setItem(chave, e.target.value);
        }
    }
}

function ValorLocalStorage() {
    document.getElementById("cadastroNome").value = window.localStorage.getItem("Nome da Loja")
    document.getElementById("cadastroEndereco").value = window.localStorage.getItem("Endereço")
    if (window.localStorage.getItem("Domingo") == "on") {
        document.getElementById("cadastroCheckbox1").checked = true
    } else {
        document.getElementById("cadastroCheckbox1").checked = false
    }

    if (window.localStorage.getItem("Segunda") == "on") {
        document.getElementById("cadastroCheckbox2").checked = true
    } else {
        document.getElementById("cadastroCheckbox2").checked = false
    }

    if (window.localStorage.getItem("Terça") == "on") {
        document.getElementById("cadastroCheckbox3").checked = true
    } else {
        document.getElementById("cadastroCheckbox3").checked = false
    }

    if (window.localStorage.getItem("Quarta") == "on") {
        document.getElementById("cadastroCheckbox4").checked = true
    } else {
        document.getElementById("cadastroCheckbox4").checked = false
    }

    if (window.localStorage.getItem("Quinta") == "on") {
        document.getElementById("cadastroCheckbox5").checked = true
    } else {
        document.getElementById("cadastroCheckbox5").checked = false
    }

    if (window.localStorage.getItem("Sexta") == "on") {
        document.getElementById("cadastroCheckbox6").checked = true
    } else {
        document.getElementById("cadastroCheckbox6").checked = false
    }

    if (window.localStorage.getItem("Sábado") == "on") {
        document.getElementById("cadastroCheckbox7").checked = true
    } else {
        document.getElementById("cadastroCheckbox7").checked = false
    }

    document.getElementById("openingTime").value = window.localStorage.getItem("Horário de Abertura")
    document.getElementById("closingTime").value = window.localStorage.getItem("Horário de Fechamento")
}

let form = document.getElementById('forms')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    alert("Preparando Envio...")
});

