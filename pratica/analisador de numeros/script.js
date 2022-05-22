let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor Inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {        
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor formado foi <strong>${maior}.</strong></p>`
        res.innerHTML += `<p>O menor valor formado foi <strong>${menor}.</strong></p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}.</strong></p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media}.</strong></p>`

    }
}

function esvaziar() {
    if (valores == 0) {
       alert('Lista já está vazia!')
    } else {
        res.innerHTML = ''
        lista.innerHTML = ''
        valores = []
    }
    
}