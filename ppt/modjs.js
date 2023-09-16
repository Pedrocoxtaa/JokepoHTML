
function escolher() {
    let selecao = document.getElementById('select')
    let valor = selecao.options[select.selectedIndex].value

    const nrandom = Math.floor(Math.random() * 3) + 1

    if (valor == 1) {
        if (nrandom == 1) {
            alert("Empate, os dois escolheram pedra")
        } else if (nrandom == 2) {
            alert("Você perdeu, seu oponente escolheu papel")
        } else {
            alert("Você ganhou, seu oponente escolheu tesoura")
        }
    }
    if (valor == 2) {
        if (nrandom == 2) {
            alert("Empate, os dois escolheram papel")
        } else if (nrandom == 3) {
            alert("Você perdeu, seu oponente escolheu tesoura")
        } else {
            alert("Você ganhou, seu oponente escolheu pedra")
        }
    }
    if (valor == 3) {
        if (nrandom == 3) {
            alert("Empate, os dois escolheram tesoura")
        } else if (nrandom == 1) {
            alert("Você perdeu, seu oponente escolheu pedra")
        } else {
            alert("Você é PIKA")
        }
    }
    
}

document.getElementById('button').addEventListener('click', escolher)