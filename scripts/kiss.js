const btnSim = document.getElementById('btnSim')
const btnNao = document.getElementById('btnNao');
const resp = document.getElementById('resp')
let numeroCliques = 0;
const usuario = document.getElementById('usuario')

const nome = prompt('Qual seu nome?')


usuario.innerHTML = `Olá ${nome} Vem aqui em ksa ver`
btnSim.addEventListener('click', () => {
resp.innerText =
 `Não tenho nem conta netflix,
  então ja sabe ne => METFLIXXX
  ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°)`
    setTimeout(() => {
        window.open('https://www.netflix.com/', '_blank');
    }, 3000);
})


btnNao.addEventListener('click', () => {
    console.log('bota nao clicado')
    const posicoes = [
        { top: '150px' },
        { top: '50px' },
        { top: '200px' },
        { top: '100px' },
        { top: '250px' }
    ];

    if (numeroCliques < posicoes.length) {
        const posicao = posicoes[numeroCliques];
        btnNao.style.top = posicao.top;
        numeroCliques++;
    } else {
        // Resetar para a posição original
        btnNao.style.top = '0';
        numeroCliques = 0;
    }
})