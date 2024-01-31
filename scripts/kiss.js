const btnSim = document.getElementById('btnSim')
const btnNao = document.getElementById('btnNao');
const resp = document.getElementById('resp')
const usuario = document.getElementById('usuario')

const nome = prompt('Qual seu nome?')


usuario.innerHTML = `  Olá ${nome} 
          Vem aqui em ksa ver`
btnSim.addEventListener('click', () => {
resp.innerText =
 `Não tenho nem conta netflix,
  então ja sabe ne => METFRIXXX
  ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°) ( ͡° ͜ʖ ͡°)`
    setTimeout(() => {
        window.open('https://www.netflix.com/', '_blank');
    }, 3000);
})

const posicoes = [
    { top: '50px' },
    { top: '100px' },
    { top: '20px' },
    { top: '150px' }
];

let numeroCliques = 0;


btnNao.addEventListener('click', () => {
    // Animação suave usando GSAP
    if (numeroCliques < posicoes.length) {
        const posicao = posicoes[numeroCliques];
        gsap.to(btnNao, { top: posicao.top, duration: 0.2, ease: 'power1.in' });
        numeroCliques++;
    } else {
        // Se exceder o número de posições, volta para a posição original
        gsap.to(btnNao, { top: '0', duration: 0.3, ease: 'power2.in' });
        numeroCliques = 0;
    }
});


// btnNao.addEventListener('click', () => {
//     console.log('bota nao clicado')
//     const posicoes = [
//         { top: '150px' },
//         { top: '50px' },
//         { top: '200px' },
//         { top: '100px' },
//         { top: '250px' }
//     ];

//     if (numeroCliques < posicoes.length) {
//         const posicao = posicoes[numeroCliques];
//         btnNao.style.top = posicao.top;
//         numeroCliques++;
//     } else {
//         // Resetar para a posição original
//         btnNao.style.top = '0';
//         numeroCliques = 0;
//     }
// })