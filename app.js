let listaDeNumerosSorteados = [];
let limite = 1000;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

let input = document.querySelector('input')
input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        verificarChute()
    }
    })
function eixibirTextoNaTela(tag, texto) {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}


function exibirMensagemInicial() {
    eixibirTextoNaTela('h1', 'Jogo do número secreto');
    eixibirTextoNaTela('p', `Escolha um número entre 1 e ${limite}`);
}

exibirMensagemInicial()

function verificarChute() {
    const chute = Number(document.querySelector('input').value)

    const palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
    if (chute === numeroSecreto) {
        eixibirTextoNaTela('h1', 'Acertou!')
        eixibirTextoNaTela('p', `Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`)
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else if (chute > numeroSecreto) {
        eixibirTextoNaTela('p', `O número secreto é menor que ${chute}`)
    }         else {
        eixibirTextoNaTela('p', `O número secreto é maior que ${chute}`)
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == limite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido
    }
}

function limparCampo() {
    const chute = document.querySelector('input') 
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

// Este foi meu primeiro projeto em JS desenvolvido junto a professores da Alura, muito conhecimento adquirido.