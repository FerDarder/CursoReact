import productos from './productos';



const traerProductos = (categoryId) => {
    return new Promise((resolve,reject) => {
        const productosFiltrados = productos.filter(producto => producto.category === categoryId);
        setTimeout(()=>{
            if(categoryId){
                resolve(productosFiltrados);
            }else{
                resolve(productos);
            }
        },500);
    })
}

export default traerProductos

