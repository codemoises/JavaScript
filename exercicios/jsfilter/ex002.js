//-------   SIMPLIFICANDO A FUNÇÃO DE CALLBACK

const numeros = [5 , 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(function(valor) {
    return valor > 10;
});

console.log(numerosFiltrados);