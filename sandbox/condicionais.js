// exercicio 1

// let num = prompt("digite um numero")

// if (nun > 0) {


//     console.log("positivo.");


// } else if( num < 0) {

//     console.log("negativo");
// }

// else {

//     console.log("zero");
// }

// exercicio 2

// let num = prompt ("digite um numero");

// if (num % 2 == 0 ) {

//     console.log("Par.")
// } else {

//     console.log("Impar.")
// }


// exercicio 3

// let num = prompt ("Insira idade");

// if (num <= 12 ) {

//     console.log("Crianca.");

// } else if (num >= 18) { 


//     console.log("Adulto.");

// } else {
//     console.log("Adolecente");

// }


// // exercicio 4

// let num = prompt("Digite a nota do Aluno.");

// if (num >= 0 && num <= 100) {

//     if (num > 60) {
//         console.log("Aprovado");
//     } else {

//         console.log("Reprovado");
//     }

// }  else {

//     console.log("Nota Invalida!!!");

// }


// Intermediario 4


// let user = prompt("Digite usuario");

// if (user === "adimin") {

//     let pass = prompt("Digite senha");

//     if (pass === "1234") {

//         console.log("Login bem-sucedido.");
//     } else {
//         console.log("Usuario inexistente.");

//     }


// } else {
//     console.log("Acesso negado");

// }


//  Intermediario 3

// let cash = prompt("Insira o valor da compra");

// if (cash > 100.0) {

//     console.log (cash - [10 / 100 * cash] );

// } else {

//     console.log(cash);

// }



//  Intermediario 2

// let n1 = prompt("Insira o primeiro numero");

// let n2 = prompt("Insira o segundo numero");

// let n3 = prompt("Insira o terceiro numero");


// if (n1 > n2 && n1 > n3 ) {

//    console.log(n1); 

// } else if (n2 > n1 && n2 > n3) {

//     console.log( n2 );

// } else {

//     console.log(n3);
// }


//  Intermediario 1

// let num1 = parseFloat(prompt("Insira o primeiro número:"));
// let num2 = parseFloat(prompt("Insira outro número:"));
// let operacao = prompt("Insira a operação. Ex: +, -, *, /.");

// let resultado = null;

// switch (operacao) {
//   case "+":

//     resultado = num1 + num2;

//     break;

//   case "-":

//     resultado = num1 - num2;

//     break;

//   case "*":

//     resultado = num1 * num2;

//     break;

//   case "/":

//     if (num2 == 0) {
//         console.log("Você não pode dividir um número por zero.");
//     } else {
//         resultado = num1 / num2;
//         console.log("resultado", resultado);
//     }

//     break;

//   default:

//     console.log("Operador inválido.");

//     break;
// }

// if (operacao != "/") {

//     console.log("resultado", resultado);

// }


