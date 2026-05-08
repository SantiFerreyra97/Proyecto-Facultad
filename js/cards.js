function generarCard(producto) {
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
                            onclick="agregarAlCarrito('${producto.nombre}', ${producto.precio})">
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

function agregarAlCarrito(nombre, precio) {
    alert(`${nombre} agregado al carrito`);
}