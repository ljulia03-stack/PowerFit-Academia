// Aguarda o carregamento completo do documento
document.addEventListener('DOMContentLoaded', () => {

    // 1. Rolagem Suave para os Links do Menu
    const menuLinks = document.querySelectorAll('nav a, .btn');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');

            // Verifica se é um link interno (começa com #)
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault(); // Impede o salto abrupto padrão
                
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 2. Mudança de Estilo no Cabeçalho ao Rolar
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
        } else {
            header.style.backgroundColor = 'var(--bg-dark)';
            header.style.boxShadow = 'none';
        }
    });

    // 3. Interatividade nos Botões de Assinatura de Planos
    const planButtons = document.querySelectorAll('.btn-plan');

    planButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Pega o nome do plano selecionado
            const card = button.closest('.card-plan');
            const planName = card.querySelector('h3').innerText;

            alert(`Deseja iniciar sua matrícula no ${planName}?\nEm breve entraremos em contato!`);
        });
    });

});
