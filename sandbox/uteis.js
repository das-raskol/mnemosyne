// FILTER

// const numeros = [1, 2, 3, 4, 5, 6];
// console.log(numeros[0]);


// // Filtrar números maiores que 2
// const numerosMaioresQueDois = numeros.filter(numero => numero > 2);
// console.log(numerosMaioresQueDois); // [3, 4, 5, 6]


// const numeros = [`abacate`, `maca`];
// const maioresQueDez = numeros.filter(fruta => fruta == 'maca' || fruta == `banana`);
// console.log(maioresQueDez); // 


// const numeros = [5, 8, 12, 15, 3, 20, 7];
// const maioresQueDez = numeros.filter(numero => numero > 10);
// console.log(maioresQueDez)



// const nomes = ["Ana", "João", "Amanda", "Carlos", "Arthur", "Beatriz"];
// const nomesComA = nomes.filter(nome => nome.startsWith("A"));
// console.log(nomesComA)



// const nomes = ["Ana", "João", "amanda", "Carlos", "Arthur", "Beatriz"];
// const nomesComA = nomes.filter(nome => nome.startsWith("a") || nome.startsWith("A") );
// console.log(nomesComA)





// FIND




// const produtos = [
//     { nome: "Teclado", preco: 120 },
//     { nome: "Mouse", preco: 40 },
//     { nome: "Fone de ouvido", preco: 80 },
//     { nome: "Caderno", preco: 30 }


// ];


//                            //  // esse tem q ser == esse
//                          //            //!      !
// const produtosBaratos = produtos.find(barato => barato.preco < 50);
// console.log(produtosBaratos);


// const nomes = ["João", "Carlos", "Amanda", "Arthur", "Beatriz"];
// const amanda = nomes.find(nome => nome == "Amanda");
// console.log(amanda)



// const listaDeUsuarios = [
//     { id: 1, nome: "Alice" },
//     { id: 2, nome: "Bruno" },
//     { id: 3, nome: "Carla" }
//   ];
  
//   const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);
  
//   console.log(usuarioEncontrado); 



// INTERMEDIARIO

// exercicio 4

// const produtos = [
//     { nome: "Teclado", preco: 120 },
//     { nome: "Mouse", preco: 40 },
//     { nome: "Fone de ouvido", preco: 80 },
//     { nome: "Caderno", preco: 30 }
//   ];
//   const produtoBuscado = produtos.find(produto => produto.nome == "Fone de ouvido");
//   console.log(produtoBuscado); 


// exercicio 5


// const pessoas = [
//     { nome: "Carlos", idade: 17 },
//     { nome: "Mariana", idade: 22 },
//     { nome: "João", idade: 15 },
//     { nome: "Fernanda", idade: 30 }
//   ];
//   const maiorDeIdade = pessoas.find(maior => maior.idade >= 18);
//   console.log(maiorDeIdade);


// exercicio 6


// const palavras = ["sol", "mar", "montanha", "rio", "lua", "nuvem"];
// const palavraLonga = palavras.find(maior => maior.length > 5);
// console.log(palavraLonga);

//MAP


// const palavras = ["olá", "mundo", "javascript"];
// const enfatizadas = palavras.map(palavra => palavra + "!!!");
// console.log(enfatizadas); 

// const nomes = ["ana", "bruno", "carla"];
// const nomesMaiusculos = nomes.map(nome => "colaborador " + nome)
// console.log(nomesMaiusculos);


// intermediario MAP



const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Carlos", idade: 28 }
  ];
  const nomes = pessoas.map(pessoa => pessoa.nome);
  console.log(nomes); // ["João", "Maria", "Carlos"]

const pessoasForaJoao = pessoas.map(pessoa => {
    return {
        nome: pessoa.nome
    }
})
console.log(pessoasForaJoao)