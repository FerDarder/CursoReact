Para este proyecto elegí simular un e-commerce de productos electrónicos. Desde hardware hasta tablets.
 
La lógica utilizada no sale de los temas vistos en clase, ni tampoco incluí dependencias extras por npm. 

Los datos para el ItemListContainer me los trae una promesa desde un arreglo hardcodeado. Cuando se selecciona una categoría, mediante
un filter() compara las categorias, si la categoria seleccionada es igual a la categoria del objeto del arreglo, imprime el objeto.
Una lógica similar se utiliza para el ItemDetailContainer, lo único diferente es que utilizo un find en lugar de un filter, ya que quiero
obtener un único objeto (producto) que tiene un id unívoco.
 Además utilizo un useParams en ambos, ItemListContainer y ItemDetailContainer para obtener tanto la categoria como el id de lo seleccionado 
por el usuario