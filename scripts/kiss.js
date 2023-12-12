const btnSim = document.getElementById('btnSim')
const btnNao = document.getElementById('btnNao');
const amorAny = document.querySelector('h1')
let numeroCliques = 0;


btnSim.addEventListener('click', () => {
amorAny.innerText = "TE AMU"
    setTimeout(() => {
        window.open('https://www.youtube.com/watch?v=k1rKpUjiGgM&ab_channel=PianoeTecladoTutorial', '_blank');
    }, 2000);
})


btnNao.addEventListener('click', () => {
    console.log('bota nao clicado')
    const posicoes = [
        { top: '150px' },
        { top: '50px' },
        { top: '300px' },
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