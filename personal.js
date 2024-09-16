window.addEventListener('load', () => {
    
    const obj = new URLSearchParams(window.location.search);
    const userName = obj.get('name') || sessionStorage.getItem('userName');

    if (userName) {
        
        document.getElementById('user-name').textContent = `Welcome ${userName}`;
    } else {
        window.location.href = 'Login.html';
    }

   
    document.getElementById('logout-btn').addEventListener('click', (event) => {
        event.preventDefault(); 
        window.location.href = 'Login.html'; 
    });
});
