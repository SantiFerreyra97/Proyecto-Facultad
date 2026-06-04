function generarCard(producto) {
    const productoJson = JSON.stringify(producto).replace(/'/g, "&#39;");
    return `
        <div class="col-md-4">
            <div class="card h-100 shadow-sm">
                <div style="height: 200px; overflow: hidden; background: #f5f5f5; display: flex; align-items: center; justify-content: center;">
                    <img src="${producto.imagen}" alt="${producto.nombre}"
                         style="width: 100%; height: 100%; object-fit: contain; padding: 8px;">
                </div>
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text text-muted flex-grow-1">${producto.descripcion}</p>
                    <p class="fw-bold" style="color: var(--color-primary);">$${producto.precio}</p>
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <button class="btn btn-outline-secondary btn-sm"
                                onclick="cambiarCantidad(this, -1)">−</button>
                        <span class="cantidad">1</span>
                        <button class="btn btn-outline-secondary btn-sm"
                                onclick="cambiarCantidad(this, 1)">+</button>
                    </div>
                    <button class="btn w-100 text-white"
                            style="background-color: var(--color-primary);"
                            data-producto='${productoJson}'
                            onclick="agregarAlCarrito(this)">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    `;
}

function cambiarCantidad(btn, cambio) {
    const span = btn.parentElement.querySelector('.cantidad');
    let cantidad = parseInt(span.textContent);
    cantidad = Math.max(1, cantidad + cambio);
    span.textContent = cantidad;
}

function mostrarToast(mensaje) {
    let contenedor = document.getElementById('toast-container');
    if (!contenedor) {
        contenedor = document.createElement('div');
        contenedor.id = 'toast-container';
        contenedor.style.cssText = 'position:fixed;top:80px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
        document.body.appendChild(contenedor);
    }
    const toast = document.createElement('div');
    toast.className = 'alert alert-success shadow mb-0';
    toast.style.cssText = 'min-width:250px;opacity:1;transition:opacity 0.4s;';
    toast.textContent = mensaje;
    contenedor.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 2200);
}

function agregarAlCarrito(button) {
    const producto = JSON.parse(button.dataset.producto);
    const card = button.closest('.card');
    const cantidad = parseInt(card.querySelector('.cantidad').textContent);

    producto.cantidad = cantidad;

    const clave = claveCarrito();
    let carrito = JSON.parse(localStorage.getItem(clave)) || [];
    const idx = carrito.findIndex(p => p.id === producto.id);

    if (idx >= 0) {
        carrito[idx].cantidad += cantidad;
    } else {
        carrito.push(producto);
    }

    localStorage.setItem(clave, JSON.stringify(carrito));
    actualizarContadorCarrito();
    mostrarToast(`"${producto.nombre}" agregado al carrito`);
}
