import productos from "./productos";
    
const traerProducto = (id) => {
    return new Promise((resolve,reject) => {
        const productoElegido = productos.find((producto) => producto.id === Number(id));
        setTimeout(() => {
            resolve(productoElegido);
        },2000);
    });
}

export default traerProducto
