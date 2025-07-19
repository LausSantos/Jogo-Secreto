//Criar uma função que exibe "Olá, mundo!" no console

function exibirOla() {
  console.log("Olá, mundo!");
}

exibirOla();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function nomeCompleto (nome) {
  console.log (`Bom dia ${nome}!`)
}

nomeCompleto("Laus")

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

function dobro (a) {
  return (a*2)
}
console.log(dobro(560))

//Criar uma função que recebe três números como parâmetros e retorna a média deles

function media (a, b, c) {
  return (a+b+c) / 3 
}
console.log(media(5, 5, 5));

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo

function multiplicar (numero, numero) {
  return (numero * numero)
}
console.log(multiplicar(10, 10))

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculaImc (peso, altura) {
  let imc = peso / (altura * altura) * 1000;
  return imc
}

console.log(calculaImc (70, 190));

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calculaFatorial(numero) {
  if (numero < 0) {
    return "Fatorial não definido para números negativos";
  }
  if (numero === 0 || numero === 1) {
    return 1;
  }
  return numero * calculaFatorial(numero - 1);
}
console.log(calculaFatorial(5)); 

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function cotacao (real) {
  let valor = real * 4.80;
  return valor.toFixed(2);
}
console.log (cotacao(8));

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function perimetroRetangulo (lado, altura) {
  let retangulo = lado * altura
  return retangulo
}
console.log (perimetroRetangulo (2, 5))

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function perimetroCircular (x) {
  let circulo = 2 * 3.14 * x
  return circulo
}
console.log (perimetroCircular(5))

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuadaDois(x) {
  let tabuada = 5 * x
  return tabuada
}
console.log(tabuadaDois(10))

//Crie uma lista vazia, com o nome listaGenerica

let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python']

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let nomes = ['Laus', 'Vitoria', 'Joao'];
console.log(nomes [0])

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
console.log(nomes [1])

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
console.log(nomes [2])