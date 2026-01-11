/* =================================================
   CONTROLE DO MENU MOBILE E INTERAÇÕES
   =================================================
*/

// Seleção de elementos do DOM
const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const overlay = document.getElementById('overlay-menu');

/**
 * Função para abrir o menu
 */
const abrirMenu = () => {
    menuMobile.classList.add('abrir-menu');
    overlay.style.display = 'block';
};

/**
 * Função para fechar o menu
 */
const fecharMenu = () => {
    menuMobile.classList.remove('abrir-menu');
    overlay.style.display = 'none';
};

// Eventos de clique
btnMenu.addEventListener('click', abrirMenu);
overlay.addEventListener('click', fecharMenu);

// Fecha o menu automaticamente ao clicar em qualquer link (âncora) dentro dele
menuMobile.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        fecharMenu();
    }
});