/*
Objetivo 1 - quando o usuario clicar no botao de mostrear mais deve abrir o sporjeots que estao escondidos no html

Passo 1 - pegar o botao mostrar mais dno JS pra poder verificar quando o usuario clicar em cima dele
Passo2 - identificar o clique no botao
Passo 3 - adicionar a classe ativo nos projetos escondidos

objetios 2- esconder o botao de mostrar mais 
Passo 1 - pegar o botao e esconder ele 
*/
//Objetivo 1 - quando o usuario clicar no botao de mostrear mais deve abrir o sporjeots que estao escondidos no html
//Passo 1 - pegar o botao mostrar mais dno JS pra poder verificar quando o usuario clicar em cima dele


const botaoMostrarProjetos= document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


botaoMostrarProjetos.addEventListener('click',() => {
//Passo 3 - adicionar a classe ativo nos projetos escondidos
    mostrarMaisProjetos();
//objetios 2- esconder o botao de mostrar mais 
//Passo 1 - pegar o botao e esconder ele
    esconhderBotao();
});

function esconhderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');

    });
}
