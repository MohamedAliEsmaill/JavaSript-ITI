document.addEventListener('DOMContentLoaded', () => 
{
    const loginButton = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDisplay = document.getElementById('login-message');

    loginButton.onclick = () => 
    {
        const username = usernameInput.value;
        const password = passwordInput.value;

        const login =
        {
            username: username,
            password: password
        };

        if (login.username === 'admin' && login.password === '123') 
        {
            messageDisplay.textContent = 'Welcome';
            messageDisplay.style.color = 'green';
        }
        else 
        {
            messageDisplay.textContent = 'Not registered';
            messageDisplay.style.color = 'red';
        }
    };
});