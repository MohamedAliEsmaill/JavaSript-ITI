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

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!passwordRegex.test(password)) 
        {
            messageDisplay.textContent = 'The password should contain small , capital letters and numbers one of them atleast and should not be less than 8 characters.';
            messageDisplay.style.color = 'red';
        } 
        else 
        {
            messageDisplay.textContent = '';
            console.log('Form submitted successfully!');
        }
    };
});