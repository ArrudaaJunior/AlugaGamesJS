function alterarStatus(id) {
    let jogoAlugado = document.getElementById(`game-${id}`);
    let imagem = jogoAlugado.querySelector('.dashboard__item__img');
    let botao = jogoAlugado.querySelector('.dashboard__item__button');
    let nomeDoJogo = jogoAlugado.querySelector('.dashboard__item__name');
    let jogosAlugados = 0;

    if (imagem.classList.contains('dashboard__item__img--rented')) {

        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeDoJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
            jogosAlugados--;
        }
       
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver'
        jogosAlugados++;

    }

    contarEExibirJogosAlugados();
}

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});