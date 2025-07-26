// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            messageDiv.style.color = 'red';
            messageDiv.textContent = '❗ Please enter both username and password.';
        } else if (username === 'Tejkumar' && password === 'test123') {
            messageDiv.style.color = 'green';
            messageDiv.textContent = `✅ Login successful! Welcome, ${username}! 🎉`;
        } else {
            messageDiv.style.color = 'red';
            messageDiv.textContent = '❌ Invalid credentials. Please try again.';
        }
    });

    document.getElementById('cancelBtn').onclick = function() {
        usernameInput.value = '';
        passwordInput.value = '';
        messageDiv.textContent = '';
    }
});