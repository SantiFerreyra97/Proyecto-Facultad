const paginas = [
    { titulo: 'Home', url: 'index.html' },
    { titulo: 'Medicamentos', url: 'pages/categorias/medicamentos.html' },
    { titulo: 'Cuidado Personal y Perfumería', url: 'pages/categorias/cuidado-personal.html' },
    { titulo: 'Bebés y Mamás', url: 'pages/categorias/bebes.html' }
];

function obtenerUsuario() {
    try {
        return JSON.parse(sessionStorage.getItem('usuario')) || null;
    } catch {
        return null;
    }
}

function claveCarrito() {
    const u = obtenerUsuario();
    return u && u.email ? `carrito_${u.email}` : 'carrito';
}

function generarNavbar(rutaBase = '') {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    const paginaActual = window.location.pathname;
    const usuario = obtenerUsuario();
    const nombreUsuario = usuario
        ? (usuario.nombre ? `${usuario.nombre} ${usuario.apellido || ''}`.trim() : usuario.email)
        : '';

    let links = paginas.map(p => {
        const esActiva = paginaActual.includes(p.url.split('/').pop()) ? 'active' : '';
        return `
            <li class="nav-item">
                <a class="nav-link ${esActiva}" href="${rutaBase}${p.url}">${p.titulo}</a>
            </li>
        `;
    }).join('');

    nav.innerHTML = `
        <div class="container">
            <a class="navbar-brand" href="${rutaBase}index.html">
                <img src="${rutaBase}img/logo.png" alt="Farmacia Falco" height="45">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    ${links}
                </ul>
                ${nombreUsuario ? `<span class="text-white me-3 small">Hola, <strong>${nombreUsuario}</strong></span>` : ''}
                <button class="btn btn-outline-light me-2" onclick="cerrarSesion()">Cerrar sesión</button>
                <a href="${rutaBase}pages/carrito.html" class="btn btn-info btn-sm position-relative">
                    Mi Carrito
                    <span id="carrito-badge" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style="display:none">0</span>
                </a>
            </div>
        </div>
    `;

    actualizarContadorCarrito();
}

function actualizarContadorCarrito() {
    const badge = document.getElementById('carrito-badge');
    if (!badge) return;
    const carrito = JSON.parse(localStorage.getItem(claveCarrito()) || '[]');
    const total = carrito.reduce((acc, p) => acc + (p.cantidad || 0), 0);
    badge.textContent = total;
    badge.style.display = total > 0 ? 'inline' : 'none';
}

function cerrarSesion() {
    sessionStorage.removeItem('usuario');
    const path = window.location.pathname;
    let urlLogin;
    if (path.includes('/categorias/')) {
        urlLogin = '../login.html';
    } else if (path.includes('/pages/')) {
        urlLogin = 'login.html';
    } else {
        urlLogin = 'pages/login.html';
    }
    window.location.href = urlLogin;
}
