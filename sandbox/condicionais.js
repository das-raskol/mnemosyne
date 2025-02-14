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


// Intermediario 1


let user = prompt("Digite usuario");

if (user === "adimin") {

    let pass = prompt("Digite senha");

    if (pass === "1234") {

        console.log("Login bem-sucedido.");
    } else {
        console.log("Usuario inexistente.");

    }


} else {
    console.log("Acesso negado");

}