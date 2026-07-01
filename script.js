// Aguarda o documento carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // Seleciona todos os botões de inscrição dos planos
    const botoesPlanos = document.querySelectorAll(".plan-card .btn");

    botoesPlanos.forEach(botao => {
        botao.addEventListener("click", (event) => {
            event.preventDefault(); // Impede o link de recarregar a página
            
            // Pega o nome do plano correspondente ao botão clicado
            const nomePlano = botao.parentElement.querySelector("h3").innerText;
            
            // Exibe uma mensagem de sucesso para o usuário
            alert(`Obrigado pelo interesse! Você escolheu o ${nomePlano}. Em breve nossa equipe entrará em contato para finalizar sua matrícula na PowerFit!`);
        });
    });
});
