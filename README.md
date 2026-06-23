# Farmacia Falco — E-commerce

**Alumno:** Santiago Ferreyra  
**Institución:** IES Siglo 21  
**Materia:** Aplicaciones Web I — Analista de Sistemas  
**Entrega:** Trabajo Práctico Integrador — Entrega Final

---

## Descripción

E-commerce de farmacia desarrollado como trabajo integrador de la materia Aplicaciones Web I. El proyecto simula una tienda online de la Farmacia Falco, un negocio familiar ubicado en el interior de Córdoba.

La tienda permite explorar productos en tres categorías, gestionar un carrito de compras y completar un proceso de compra con validación de formularios. 

Enlace público:  https://farmaciafalco.vercel.app/

Enlace público del video explicativo: https://youtu.be/2GT93gDHWCg

---

## Categorías de productos

- **Medicamentos** — analgésicos, antiinflamatorios, antibióticos
- **Cuidado Personal y Perfumería** — cremas, shampoos, perfumes, aceites
- **Bebés y Mamás** — pañales, leches de fórmula, productos de higiene

---

## Roadmap de desarrollo

### Etapa 1 — Estructura HTML
Creación de la estructura base de todas las páginas del sitio.

- `index.html` (home), `pages/login.html` y `pages/registro.html`
- Páginas de categoría: medicamentos, cuidado personal, bebés
- Navbar con links a todas las secciones
- Formularios de login y registro (solo HTML, sin lógica)
- README con datos del autor y descripción del proyecto
- Repositorio GitHub configurado como público

### Etapa 2 — Estilos con Bootstrap
Incorporación de identidad visual y diseño responsive.

- Integración de Boostrap vía CDN
- Paleta de colores definida con variables CSS 
- Navbar con logo, links colapsables en mobile y botón de carrito
- Formularios de login y registro estilizados con cards centradas
- Prototipo de cards de producto con imagen, título, descripción y precio
- Layout de grilla responsive para home y páginas de categoría

### Etapa 3 — JavaScript
Interactividad y componentización del sitio.

- `js/navbar.js`: navbar como componente reutilizable 
- `js/login.js`: submit redirige al home; logout redirige al login
- `js/cards.js`: función `generarCard()` que genera el HTML de cada producto
- Función `agregarAlCarrito()` que guarda productos en `localStorage`

### Etapa 4 — Datos con JSON
Carga dinámica de productos desde un archivo JSON.

- `data/productos.json`: 18 productos distribuidos en las 3 categorías
- `js/productos.js`: función `cargarProductos(categoria)` con `fetch()` y `async/await`
- Home muestra 3 productos destacados de cada categoría 
- Páginas de categoría muestran todos los productos de esa sección
- Manejo de errores con `try/catch`

### Etapa 5 — localStorage y carrito
Persistencia de datos y gestión completa del carrito.

- `js/registro.js`: guarda usuarios en `localStorage` (array `usuarios[]`)
- `js/login.js`: autentica comparando email y contraseña con el array; guarda `{nombre, apellido, email}` en `sessionStorage`
- Navbar muestra "Hola, Nombre Apellido" leyendo desde `sessionStorage`
- Carrito con clave por usuario (`carrito_email`) para aislar datos entre cuentas
- `pages/carrito.html`: tabla con productos del carrito, controles de cantidad, eliminar ítem y vaciar carrito

### Entrega Final — Checkout y mejoras
Mejora significativa: página de finalización de compra que completa el flujo e-commerce.

- `pages/checkout.html`: nuevo página de checkout
- Formulario de datos de entrega con validación nativa HTML5
- Selector de método de pago (efectivo, tarjeta, transferencia)
- Resumen del pedido calculado en tiempo real desde el carrito
- Pre-llenado automático de nombre y email desde `sessionStorage`
- Modal de confirmación al completar la compra; vacía el carrito y redirige al home
- Publicación en plataforma pública

---

## Tecnologías utilizadas

HTML5, CSS3, Bootstrap, JavaScript, JSON
