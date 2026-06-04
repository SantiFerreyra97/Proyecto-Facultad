document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre   = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email    = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const fecha    = document.getElementById('fecha').value;

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        if (usuarios.some(u => u.email === email)) {
            alert('Ya existe una cuenta registrada con ese email.');
            return;
        }

        usuarios.push({ nombre, apellido, email, password, fecha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        window.location.href = 'login.html';
    });
});
