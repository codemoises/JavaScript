// RETORNE AS PESSOAS QUE TEM O NOME COM 5 LETRAS OU MAIS
// RETORNE AS PESSOAS COM MAIS DE 50 ANOS
// RETORNE AS PESSOAS CUJO NOME TERMINA COM A LETRA "A"

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

// --------   Q01
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

// --------  Q02
const pessoasComMaisDeCinquenta = pessoas.filter(obj => obj.idade > 50);

console.log(pessoasComMaisDeCinquenta);

// --------  Q03
const pessoasComAnofinal = pessoas.filter(obj => {
    return obj.nome.toLowerCase().endsWith('a');

});
console.log(pessoasComAnofinal);