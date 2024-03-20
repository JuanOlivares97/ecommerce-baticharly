const CardProduct = ({imgRef,NombreProducto,PrecioProducto}) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden m-6 w-48 h-full">
            {/* Imagen del producto */}
            <img src={imgRef} alt="Product" className="w-48 h-48 object-cover" />

            {/* Contenido de la tarjeta */}
            <div className="p-4">
                {/* Nombre del producto */}
                <h2 className="text-lg font-semibold mb-2">{NombreProducto}</h2>
                

                {/* Precio del producto */}
                <div className="flex items-center flex-col">
                    <span className="text-lg font-semibold text-gray-800">${PrecioProducto}</span>

                    {/* Botón de agregar al carrito (opcional) */}
                    <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 focus:outline-none">Agregar al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default CardProduct;