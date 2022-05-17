const pessoas = [
    { nome: 'Luiz', idade: 12 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const idade = pessoas.map(obj => ({idade: obj.idade}));

console.log(idade);
console.log(pessoas);