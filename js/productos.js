async function cargarProductos(categoria) {
    try {
        const enCategoria = window.location.pathname.includes('/categorias/');
        const jsonPath = enCategoria ? '../../data/productos.json' : 'data/productos.json';
        const response = await fetch(jsonPath);
        const data = await response.json();
        return data[categoria] || [];
    } catch (error) {
        console.error('Error al cargar productos:', error);
        return [];
    }
}