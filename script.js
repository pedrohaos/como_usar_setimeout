const btn = document.querySelector('.btn');

btn.addEventListener('mouseenter', () => {
    setTimeout(() => {   
        btn.innerText = 'tira o dedo do meu botão seu tarato XD'
    }, 2000);
    btn.innerText = 'vc colocou o dedo no meu botão :D'
});

btn.addEventListener('mouseleave', () => {
    btn.innerText = 'vc tirou o dedo no meu botão ;D';
});