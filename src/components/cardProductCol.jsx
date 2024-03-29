import Image from "next/image";
import Link from "next/link";

const CardProductCol = ({ id, imgRef, NombreProducto, PrecioProducto }) => {
  return (
    <div className="bg-black text-white rounded-lg shadow-md overflow-hidden flex flex-row">
      {/* Imagen del producto */}
      <Link href={`/product/${id}`}>
        <div className="w-44 h-44 relative">
          <Image src={imgRef} alt="Product" layout="fill" objectFit="cover" />
        </div>
      </Link>

      {/* Contenido de la tarjeta */}
      <div className="p-2 flex flex-col justify-between flex-grow">
        {/* Nombre del producto */}
        <h2 className="text-md font-semibold mb-2 text-center">{NombreProducto}</h2>

        {/* Precio del producto */}
        <div className="flex items-center justify-center">
          <span className="text-3xl font-semibold">${PrecioProducto}</span>
        </div>
        
        {/* Botón de agregar al carrito (opcional) */}
        <button className="px-3 py-1 bg-yellow-400 text-white font-bold rounded hover:bg-yellow-500 focus:outline-none self-center">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default CardProductCol;