//-------   MANEIRA COMPPLETA

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
    return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);

console.log(numerosFiltrados);