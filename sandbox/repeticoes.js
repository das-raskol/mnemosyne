
function exercicioRep01() {

  for (let contador = 1; contador <= 10; contador++) {
    console.log("Contagem: ", contador);

  }


  // pegar a classe no html- cria um paragrafo no html


  let divDeLogs = document.querySelector(".logs");

  let paragrafo = document.createElement("p");

  paragrafo.innerHTML = "Exercicio 01 de repeticao executado, confira o console.";


  divDeLogs.appendChild(paragrafo);

}



function exercicioRep02() {


  let count = 1;

  while (count <= 5) {

    console.log('contagem:', count);

    count++;
  }

  let contador = 1

}




 // faz uma vez e depois pena no enquanto

//    do {
//      console.log("Executado pelo menos uma vez", contador);
//   } while (false);


function exercicioRep03() {



  let mensagem = "";

  do {

    mensagem = prompt("Digite um txt");

    alert("texto digitado" + mensagem);

  } while (mensagem != "sair")

  console.log("saiu!")


}


// exercicio 2

// let num1 = prompt("Insira o número para a tabuada");

//   for (let contador = 1; contador <= 10; contador++) {

//    let calc = num1 * contador;

//     console.log(calc);

//   }

// segunda op do exercicio


//   let num1 = prompt("Insira o número para a tabuada");

//   for (let contador = 1; contador <= 10; contador++) {

//    let calc = num1 * contador;

//    let msg = `${num1} x ${contador} = ${calc}`

//     console.log(msg);

//   }



// exercico 3

// let num1 = parseFloat(prompt("Insira o número!"));

// for (let contador = 1; contador <= 3; contador++){

// let calc = num1 + contador;

// console.log(calc);

// }




// // exercicio 1 inter


// for (let contador = 1; contador <= 50; contador++) {


//     if (contador % 2 == 0 ) {

//       console.log(contador);}

//   }


// exercicio 2 inter



// let numeroAleatorio = Math.floor(Math.random() * 100);

// let chute = null;

// while (chute != numeroAleatorio) {

//     chute = parseInt(prompt("Chute um número:"));

//     if (chute != numeroAleatorio) {

//         if (chute > numeroAleatorio) {

//             alert("Chutou alto.");

//         } else {

//             alert("Chutou baixo.");

//         }

//     }

// }

// alert("Você acertou!");





// exercicio 3 inter


// Contagem regressiva:

// let num = parseInt(prompt("Insira um número entre 0 e 10."));


// while ( num >= 0 ) {

//   console.log("contagem:", num);

//   num -- ;

// }


// test do



// let num = parseInt(prompt("Insira um número entre 0 e 10."));

// while ()          // crie um loop


// if (num > 10) {

//   alert("Numero Invalido");

// } else {

//   while (num >= 0) {

//     console.log("contagem:", num);

//     alert(num--);

//   }
// } 



