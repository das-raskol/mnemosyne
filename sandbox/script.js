console.log("hello world!")

var idade2 = 35;
var idade2 = "trinta e cinco";
console.log(idade2);



let nome = "Bruno"
nome = "jao"
nome = "ze"
console.log(nome);



const cargo ="professor"
console.log(cargo);


// exercicio 3



const meunome = "Bruno";

let minhaidade = 35;

let mensagem = `Meu nome e ${meunome}, tenho ${minhaidade} anos.`;


console.log(mensagem);

// tipos primtivos
console.log(typeof meunome);
console.log(typeof minhaidade);

let maiorDeIdade = true;
let temFilhos = false;

let tamanho;
console.log(tamanho);

let vazio = null;

console.log(vazio);


// execicio 3 tipos primitivos


let a = 10;
let b = "Bruno" ;
let c = "10";
let d = 20;

console.log("a + b", a + b);
console.log("a + c", a + c);
console.log("a + d", a + d);

let n1 = "42.5";
n1 = Number(n1);
console.log(n1);
console.log(typeof n1)

let n2 = "quarenta e dois";
n2 = Number(n2);
console.log(n2);
console.log(typeof n2)



console.log(parseInt(n1));
console.log(parseFloat(n1));


// condicionais

const idade = 18;

if (idade < 18) {
  console.log("Menor de idade");
} else if (idade === 18) {
  console.log("Acabou de atingir a maioridade");
} else {
  console.log("Maior de idade");
}