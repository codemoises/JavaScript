class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

const p1 = new Pessoa('Luiz', 'Miranda')


/////// FUNÇÃO CONSTRUTORA PARA FAZER UM COMPARATIVO 👇👇👇👇


function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`);
}

const p2 = new Pessoa2('Luiz', 'Miranda');