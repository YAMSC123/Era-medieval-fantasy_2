const avance = document.querySelectorAll('btn- proximo');

avance.forEach (button =>  {
    button.addEventListener('click', function() {
        const atual = document.querySelector = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById (proximoPasso).classList.add('ativo');
        })
})