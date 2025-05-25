document.addEventListener('DOMContentLoaded', () => {
    // 1. Rolagem Suave para Links de Navegação
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão de pular direto

            const targetId = this.getAttribute('href'); // Pega o ID da seção (ex: #avisos)
            const targetSection = document.querySelector(targetId); // Seleciona a seção

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Rola até a seção, ajustando para o header fixo
                    behavior: 'smooth' // Ativa a rolagem suave
                });
            }
        });
    });

    // 2. Mensagem de Boas-Vindas Dinâmica (Exemplo)
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        const welcomeMessage = document.createElement('p');
        welcomeMessage.textContent = "Seja bem-vindo(a) ao portal de informações do Setor Residencial Oeste!";
        welcomeMessage.style.cssText = 'font-size: 1.1em; color: #0f5132; margin-top: 15px;';
        heroSection.insertBefore(welcomeMessage, heroSection.querySelector('a.button')); // Insere antes do botão
    }

    // 3. Interação Simples com Cards (Exemplo: FAQ - expandir/recolher)
    document.querySelectorAll('.faq-item h4').forEach(header => {
        header.style.cursor = 'pointer'; // Indica que é clicável
        header.nextElementSibling.style.display = 'none'; // Esconde o parágrafo inicialmente

        header.addEventListener('click', function() {
            const content = this.nextElementSibling; // O parágrafo logo após o h4
            if (content.style.display === 'none') {
                content.style.display = 'block'; // Mostra o conteúdo
            } else {
                content.style.display = 'none'; // Esconde o conteúdo
            }
        });
    });

    // Você pode adicionar mais funcionalidades aqui!
    // Por exemplo, um botão "Voltar ao Topo"
    // Ou uma validação simples de formulário (se você adicionar um formulário de contato)
});