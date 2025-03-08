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
                    <p>Obrigado por se inscrever para o programa beta do StudentHub. Analisaremos sua inscrição e entraremos em contato em breve.</p>
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
