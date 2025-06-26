// script.js

/**
 * Função para validar o login
 * @param {Event} event - Objeto de evento do formulário
 */
function validateLogin(event) {
    event.preventDefault(); 
  
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
  
    if (!username || !password) {
        errorMessage.textContent = 'Por favor, preencha todos os campos!';
        return;
    }
  
    if (username === 'admin' && password === '123@456') {
        // Login bem-sucedido
        errorMessage.textContent = '';
        
        alert('Login bem-sucedido! Redirecionando...');
        
    } else {
        errorMessage.textContent = 'Usuário ou senha inválidos!';
        
        passwordInput.value = '';
        passwordInput.focus();
    }
}
  
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', validateLogin);
    } else {
        console.error('Formulário de login não encontrado!');
    }
});
