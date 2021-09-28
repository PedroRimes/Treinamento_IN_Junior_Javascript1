//cria os numeros de teste
let num1 = Math.round(Math.random()*100+1);
let num2 = Math.round(Math.random()*100+1);
let num3 = Math.round(Math.random()*100+1);
let num4 = Math.round(Math.random()*100+1);
let num5 = Math.round(Math.random()*100+1);
let lista = [num1, num2, num3, num4, num5];
//verifica divisivel
console.log("Numero 1 :",num1,"/","Numero 2 :",num2,"/","Numero 3 :",num3,"/","Numero 4 :",num4,"/","Numero 5 :",num5)
for(numero of lista){
    if (numero%3 == 0 && numero%5 != 0){
        console.log(numero,"Fizz");
    }
    if (numero%5 == 0 && numero%3 != 0){
        console.log(numero,"Buzz");
    }
    if (numero%5 == 0 && numero%3 == 0){
        console.log(numero,"FizzBuzz");
    }
}
