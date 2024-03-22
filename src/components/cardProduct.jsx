import Image from "next/image";

const CardProduct = ({imgRef,NombreProducto,PrecioProducto}) => {
    return (
        <div className="bg-black text-white rounded-lg shadow-md overflow-hidden w-48 h-96 flex flex-col">
          {/* Imagen del producto */}
          <Image src={imgRef} alt="Product" width={192} height={192} className="w-48 h-48 object-cover" />
      
          {/* Contenido de la tarjeta */}
          <div className="p-2 flex flex-col justify-between flex-grow">
            {/* Nombre del producto */}
            <h2 className="text-md font-semibold mb-2 text-center">{NombreProducto}</h2>
      
            {/* Precio del producto */}
            <div className="flex items-center justify-center">
              <span className="text-2xl font-semibold">${PrecioProducto}</span>
            </div>
            
            {/* Botón de agregar al carrito (opcional) */}
            <button className="px-3 py-1 bg-yellow-400 text-white font-bold rounded hover:bg-yellow-500 focus:outline-none self-center">Agregar al carrito</button>
          </div>
        </div>
      );
      
};

export default CardProduct;