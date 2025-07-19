let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativa = 1; 

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemInicial () {
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}

mensagemInicial()

function verificarChute() {
  let chute = parseInt(document.querySelector('input').value); 
  if (chute === numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`;

    exibirTextoNaTela('p', mensagemTentativa);
    document.getElementById ('reiniciar').removeAttribute ('disabled');

  } else {
    if (chute < numeroSecreto) {
      exibirTextoNaTela('p', 'O número secreto é maior');
    } else {
      exibirTextoNaTela('p', 'O número secreto é menor');
    }
    tentativa++; 
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolido)) {
    return gerarNumeroAleatorio()
  } else {
    listaDeNumerosSorteados.push(numeroEscolido);
    console.log (listaDeNumerosSorteados);
    return numeroEscolido;
  }
}
                                                                                                                                        
function limparCampo () {
  chute = document.querySelector ('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativa = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}