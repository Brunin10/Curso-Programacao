/*
//alert("Bom dia!");
String
let nomeUsuario ="Bruno";
console.log(nomeUsuario);
console.log('Bom dia, "professores"!');
console.log(`Seja bem vindo(a), ${nomeUsuario}!`);
nomeUsuario = prompt("Digite o seu nome: ");
console.log(`Seu nome é ${nomeUsuario}`);

//number inteiro
let idade = 33;
idade = prompt("Digite sua idade: ");
console.log(`Seu nome é ${nomeUsuario} e sua idade é ${idade}`);

//number float
let peso = 73.4;
peso = prompt("Digite o seu peso: ");
console.log(`Seu nome é ${nomeUsuario}, sua idade é ${idade} e seu peso é ${peso} kg`);

//boolean
let condicao = true;
let condicaoFalsa = false;
console.log(condicao, condicaoFalsa);
*/

/*Operadores Aritméticos
let soma;
let diferenca;
let produto;
let divisao;
let resto;
soma = 10 + 3;
diferenca = 10 - 3;
produto = 10 * 3;
divisao = 10 / 3;
resto = 10 % 3;
console.log(`o resultado da soma é ${soma}`);
console.log(`o resultado da diferenca é ${diferenca}`);
console.log(`o resultado do produto é ${produto}`);
console.log(`o resultado da divisao é ${divisao}`);
console.log(`o resultado do resto da divisao é ${resto}`);

//Estruturas condicionais
let numero;
numero = prompt("Digite um número: ");
if((numero % 2) == 0){
    console.log ("O número é par!");
}else {
    console.log("O número é ímpar!");
}

//Operadores de Comparação
let idade;
idade = prompt("Digite sua idade: ");
if(idade > 18){
    console.log("Você é maior de idade!");
}else{
    console.log("Você não é maior de idade!")
}

//Operadores Lógicos
if(idade < 12){
    console.log ("Você é uma criança!");
}else if(idade >= 18 && idade <= 40){
    console.log("Você é jovem!");
}else{
    console.log("Você é adulto");
}

let numero2 = 34
if(numero2 > 20 || numero2 < 30){
    console.log(numero2);
}

let valor = false;
console.log(!valor);

//Number
let variavel = "10";
console.log(Number(variavel));

//Array (vetor)
/*let array = [1, 10, 12];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);*/

/*Estruturas de Repetição
for(let i = 0; i < 5; i = i + 1){
    //console.log(i);
}

/*let i = 0;
while(i < 10){
    console.log(i);
    i++;
}*/

/*Função
function somafuncao(numero1, numero2){
    return numero1 + numero2;
}
*/

let numeroAleatorio;

numeroAleatorio = Math.floor(Math.random() * 10);

console.log(`Número aleatorio: ${numeroAleatorio}`);

let numeroPiso;

numeroPiso = Math.floor(4.89);

console.log(`Número piso: ${numeroPiso}`);

const dataInicial = new Date();
console.log(dataInicial);
console.log(dataInicial.getHours());
console.log(dataInicial.getMonth());

const dataAtual = new Date();
const horas = dataAtual.getHours();
const minutos = dataAtual.getMinutes();
const segundos = dataAtual.getSeconds();

console.log(`${horas}:${minutos}:${segundos}`);