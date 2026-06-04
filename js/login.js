document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const email    = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuario  = usuarios.find(u => u.email === email && u.password === password);

        if (usuario) {
            // Guardar información completa del usuario en sessionStorage
            sessionStorage.setItem('usuario', JSON.stringify({
                nombre:   usuario.nombre,
                apellido: usuario.apellido,
                email:    usuario.email
            }));
            window.location.href = '../index.html';
        } else if (email && password) {
            // Fallback: usuario no registrado, guardar solo el email
            sessionStorage.setItem('usuario', JSON.stringify({ email }));
            window.location.href = '../index.html';
        }
    });
});
