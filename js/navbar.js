// Estructura de navegación
const paginas = [
    { titulo: 'Home', url: 'index.html' },
    { titulo: 'Medicamentos', url: 'categorias/medicamentos.html' },
    { titulo: 'Cuidado Personal y Perfumería', url: 'categorias/cuidado-personal.html' },
    { titulo: 'Bebés y Mamás', url: 'categorias/bebes.html' }
];

function generarNavbar(rutaBase = '') {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    const paginaActual = window.location.href;

    let links = paginas.map(p => {
        const esActiva = paginaActual.includes(p.url) ? 'active' : '';
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
                <button class="btn btn-outline-light" onclick="cerrarSesion()">Cerrar sesión</button>
            </div>
        </div>
    `;
}

function cerrarSesion() {
    sessionStorage.removeItem('usuario');
    // Detecta si estamos en una subcarpeta
    const enCategoria = window.location.pathname.includes('/categorias/');
    window.location.href = enCategoria ? '../login.html' : 'login.html';
}