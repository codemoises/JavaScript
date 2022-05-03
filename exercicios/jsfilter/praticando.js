const num = [10, 20, 30, 40, 50, 60, 80, 90, 100];

function callbackFilter(valor) {
    return valor > 10;
}

const numfiltrados = num.filter(callbackFilter);

console.log(numfiltrados);
/*const num = [10, 20, 30, 40, 50, 60, 80, 90, 100];

const numerosFiltrados = num.filter(function (valor) {
    return valor > 10;
});

console.log(numerosFiltrados);*/

/*const num = [10, 20, 30, 40, 50, 60, 80, 90, 100];


const numerosFiltrados = num.filter( valor => valor > 10
);

console.log(numerosFiltrados);*/