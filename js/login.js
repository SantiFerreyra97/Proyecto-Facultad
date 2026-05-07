document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (email && password) {
            // Guardamos el usuario en sessionStorage
            sessionStorage.setItem('usuario', email);
            // Redirigimos al home
            window.location.href = 'index.html';
        }
    });
});