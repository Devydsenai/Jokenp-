let jogadorNome;
let jogadorPontos = 0;
let jogadorEscolha = 0;

let computadorPontos = 0;
let computadorEscolha;

// Exibe mensagem no console.
function mensagem(texto) {
    document.getElementById('mensagem').innerHTML = texto;
}

// Define o nome do jogador na tela.
function definirNomeJogador(nome) {
    document.getElementById('jogador-nome').innerHTML = nome;
}

// Sorteia um número entre dois valores.
function sortear(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calcula e retorna quem ganhou.
// 0 - Empate
// 1 - Jogador
// 2 - Computador
function calcularEscolha(jogador, computador) {
    if (jogador === 1 && computador === 1) {
        return 0;
    } else if (jogador === 1 && computador === 2) {
        return 2;
    } else if (jogador === 1 && computador === 3) {
        return 1;
    } else if (jogador === 2 && computador === 1) {
        return 1;
    } else if (jogador === 2 && computador === 2) {
        return 0;
    } else if (jogador === 2 && computador === 3) {
        return 2;
    } else if (jogador === 3 && computador === 1) {
        return 2;
    } else if (jogador === 3 && computador === 2) {
        return 1;
    } else if (jogador === 3 && computador === 3) {
        return 0;
    }
}

// Soma pontos para o jogador.
function somarPontosJogador() {
    jogadorPontos++;
    document.getElementById('jogador-pontos').innerHTML = jogadorPontos;
}

// Soma pontos para o computador.
function somarPontosComputador() {
    computadorPontos++;
    document.getElementById('computador-pontos').innerHTML = computadorPontos;
}

// Adiciona a classe selecionada.
function selecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.add('selecionada');
}

// Remove a classe selecionada.
function deselecionar(tipo, escolha) {
    document.getElementById(tipo + '-escolha-' + escolha).classList.remove('selecionada');
}

// Escolha do jogador do Usuário
// 1 - Pedra
// 2 - Papel
// 3 - Tesoura
function jogar(escolha) {
    jogadorEscolha = escolha;
    selecionar('jogador', jogadorEscolha);

    // Sorteia a jogada do computador
    computadorEscolha = sortear(1, 3);
    selecionar('computador', computadorEscolha);

    // Calcula quem ganhou
    const ganhador = calcularEscolha(jogadorEscolha, computadorEscolha);

    if (ganhador === 0) {
        mensagem('Empate');
    } else if (ganhador === 1) {
        mensagem('Pontos para ' + jogadorNome);
        somarPontosJogador();
    } else if (ganhador === 2) {
        mensagem('Pontos para Computador');
        somarPontosComputador();
    }

    setTimeout(function () {
        deselecionar('jogador', jogadorEscolha);
        deselecionar('computador', computadorEscolha);

        mensagem(jogadorNome + ', escolha uma opção acima...');
    }, 3500);
}

// Configura os botões de escolha do jogador
document.getElementById('jogador-escolha-1').onclick = function () { jogar(1); };
document.getElementById('jogador-escolha-2').onclick = function () { jogar(2); };
document.getElementById('jogador-escolha-3').onclick = function () { jogar(3); };

// Solicita o nome do jogador
jogadorNome = prompt('Qual é seu nome: ');

// Exibe mensagem de boas-vindas
mensagem('Bem-vindo ' + jogadorNome + ', está preparado? Escolha uma opção acima...');

// Define o nome do jogador na interface
definirNomeJogador(jogadorNome);