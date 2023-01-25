/* 
OBJETIVO 1 - quando o usuario clicar no botao de ''ver trailer'', devemos abrir o modal com o video do trailer.

OBJETIVO 2 - quando o usuario clicar no X devemos fechar o modal. 

OBJETIVO 1 - quando o usuario clicar no botao de ''ver trailer'', devemos abrir o modal com o video do trailer.
    - PASSO 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
    - PASSO 2 - dar um jeito de identificar quando o usuario clicar no botão
    - PASSO 3 - dar um jeito de pegar o elemento da modal do js
    - PASSO 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuario clicar no X devemos fechar o modal. 
    - passo 1 - dar um jeito de pegar o elemento 
    - passo 2 - dar um jeito de identificar quando o usuário clicar no X
    - passo 3 - fechar modal

*/
const video = document.getElementById("video");
const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

function alternarModal() {
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});









