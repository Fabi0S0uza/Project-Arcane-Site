
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buton');
    const personagens = document.querySelectorAll('.personagem');

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const botaoSelecionado = document.querySelector('.selected.buton');
            const personagemSelecionado = document.querySelector('.personagem.selecionado');

            if (botaoSelecionado) {
                botaoSelecionado.classList.remove('selected');
            }

            if (personagemSelecionado) {
                personagemSelecionado.classList.remove('selecionado');
            }

            this.classList.add('selected');
            personagens[index].classList.add('selecionado');
        });
    });
});








