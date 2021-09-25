const alunas = ["Taiana", "Marcela", "Valenthina", "Valentina", "Bruna Mara", "Celina"];

//console.log("tamanho da array: ", alunas.length )
//console.log(alunas[2]) // aluna na posição [2]
//console.log(alunas[alunas.length - 1]) // a posição da última aluna na lista []

// metodos arrays
// push - adiciona no final
// pop - retira no final
// shift() - retira do inicio
//unshift () - coloca no inicio
//includes() - ve se existe
//sort() - ordena numerica ou alfabeticamente
//qualquer metodo p utilizar com a variavel coloca o nome da variavel.Nomedometodo


alunas.push("Quezia", "Aida");
console.log(alunas);
alunas.pop()
console.log(alunas);
alunas.shift()
console.log(alunas);
alunas.unshift("Elis", "Ane")
console.log(alunas);
console.log(alunas.includes("Marcela"));
alunas.sort();
console.log(alunas)
