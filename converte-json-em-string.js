const estudante = require("./estudante.json");

// converte json em string
const stringEstudante = JSON.stringify(estudante);
// console.log(stringEstudante);
// console.log(typeof stringEstudante);

//converte string em json
const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);
console.log(objEstudante.nome);
