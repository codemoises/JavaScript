const num = [45, 25, 84, 63, 89, 23, 12, 15];

function callbackMap(valor) {
    return valor;
}

const numDobrados = num.map(callbackMap);

console.log(numDobrados);