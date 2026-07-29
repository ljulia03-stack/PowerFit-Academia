document.addEventListener('DOMContentLoaded', () => {

    // Efeito de sombra/fundo no Header ao rolar
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Lógica para Abrir e Fechar o Modal
    const modal = document.getElementById('modal');
    const openButtons = document.querySelectorAll('.open-modal');
    const closeModal = document.getElementById('closeModal');

    openButtons
