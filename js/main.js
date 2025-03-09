document.addEventListener('DOMContentLoaded', function() {
    // Formulário de inscrição beta
    const betaForm = document.getElementById('beta-signup-form');
    
    if (betaForm) {
        betaForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você adicionaria o código para enviar os dados para seu backend
            // Por enquanto, vamos apenas mostrar uma mensagem de sucesso
            
            const formData = new FormData(betaForm);
            const formValues = Object.fromEntries(formData.entries());
            
            console.log('Dados do formulário:', formValues);
            
            // Substituir o formulário por uma mensagem de sucesso
            const formContainer = document.querySelector('.signup-form-container');
            formContainer.innerHTML = `
                <div class="success-message">
                    <img src="images/success.png" alt="Sucesso">
                    <h3>Inscrição Recebida!</h3>
                    <p>Obrigado por se inscrever para o programa beta do UniTudo. Analisaremos sua inscrição e entraremos em contato em breve.</p>
                </div>
            `;
        });
    }
    
    // Menu responsivo para dispositivos móveis
    const createMobileMenu = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        const navList = document.querySelector('nav ul');
        
        // Criar botão de menu
        const menuButton = document.createElement('button');
        menuButton.classList.add('menu-toggle');
        menuButton.innerHTML = '<span></span><span></span><span></span>';
        header.insertBefore(menuButton, nav);
        
        // Adicionar evento de clique
        menuButton.addEventListener('click', function() {
            navList.classList.toggle('active');
        });
    };
    
    // Verificar se estamos em um dispositivo móvel
    if (window.innerWidth <= 768) {
        createMobileMenu();
    }
    
    // Atualizar quando a janela for redimensionada
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768 && !document.querySelector('.menu-toggle')) {
            createMobileMenu();
        } else if (window.innerWidth > 768 && document.querySelector('.menu-toggle')) {
            document.querySelector('.menu-toggle').remove();
            document.querySelector('nav ul').classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Toggle do ícone
                const toggleIcon = this.querySelector('.toggle-icon');
                toggleIcon.textContent = toggleIcon.textContent === '+' ? '-' : '+';
                
                // Toggle da resposta
                const answer = this.nextElementSibling;
                answer.classList.toggle('active');
            });
        });
    }
    
    // Código para o formulário de contato
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você adicionaria o código para enviar os dados do formulário
            // Por enquanto, apenas mostraremos uma mensagem de sucesso
            
            const formData = new FormData(contactForm);
            const formValues = Object.fromEntries(formData.entries());
            
            console.log('Dados do formulário de contato:', formValues);
            
            // Substituir o formulário por uma mensagem de sucesso
            const formContainer = document.querySelector('.contact-form-container');
            formContainer.innerHTML = `
                <div class="success-message">
                    <img src="images/success.png" alt="Sucesso">
                    <h3>Mensagem Enviada!</h3>
                    <p>Obrigado por entrar em contato. Responderemos sua mensagem em breve.</p>
                </div>
            `;
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const faqCategories = document.querySelectorAll('.faq-category');
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqCategories.length > 0) {
        faqCategories.forEach(category => {
            category.addEventListener('click', function() {
                // Remover classe active de todas as categorias
                faqCategories.forEach(cat => cat.classList.remove('active'));
                
                // Adicionar classe active à categoria clicada
                this.classList.add('active');
                
                // Obter a categoria selecionada
                const selectedCategory = this.getAttribute('data-category');
                
                // Filtrar os itens de FAQ
                faqItems.forEach(item => {
                    if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }
    
    // Funcionalidade de toggle para as perguntas do FAQ - VERSÃO MODIFICADA
    const faqQuestions = document.querySelectorAll('.faq-question');

    if (faqQuestions.length > 0) {
        console.log('Perguntas encontradas:', faqQuestions.length);
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                // Toggle do ícone
                const toggleIcon = this.querySelector('.toggle-icon');
                toggleIcon.textContent = toggleIcon.textContent === '+' ? '-' : '+';
                
                // Toggle da resposta usando manipulação direta do estilo
                const answer = this.nextElementSibling;
                if (answer.style.display === 'block') {
                    answer.style.display = 'none';
                } else {
                    answer.style.display = 'block';
                }
            });
        });
    }
});
