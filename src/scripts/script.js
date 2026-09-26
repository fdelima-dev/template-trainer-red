const logoImg = document.querySelector('.container__brandTwo img');
const nav = document.querySelector('.container__menu');

logoImg.addEventListener('click', function(){
    nav.classList.toggle('active');
});

const pergunta = document.querySelectorAll('.pergunta');

pergunta.forEach(function(pergunta){
    pergunta.addEventListener('click', function(){
        const resposta = pergunta.nextElementSibling;
        resposta.classList.toggle('active')
    })
})