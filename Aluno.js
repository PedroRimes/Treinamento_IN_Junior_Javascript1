//variaveis notas e média
let nota1 = Math.round(Math.random()*10);
let nota2 = Math.round(Math.random()*10);
let nota3 = Math.round(Math.random()*10);
let media;
//calculo média
media = (nota1+nota2+nota3)/3;
console.log("Nota 1 :",nota1,"Nota 2 :",nota2,"Nota 3 :",nota3);
console.log(media>=6?'Aprovado' : 'Reprovado');
