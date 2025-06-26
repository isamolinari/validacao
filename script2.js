// script.js

// Função para validar o login
function validateLogin(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obtém os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
  
    // Verifica se o usuário e a senha correspondem aos valores esperados
    if (username === 'admin' && password === '123@456') {
      alert('Login bem-sucedido!');
      errorMessage.textContent = ''; // Limpa a mensagem de erro
    } else {
      errorMessage.textContent = 'Usuário ou senha inválidos!';
    }
  }
  
  // Adiciona o ouvinte de evento para o envio do formulário
  document.getElementById('login-form').addEventListener('submit', validateLogin);