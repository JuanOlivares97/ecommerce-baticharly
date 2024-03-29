const SkeletonGridProductCol = ({ productsPerPage }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {Array.from({ length: productsPerPage }, (_, i) => (
        <div key={i} className="bg-white text-white rounded-lg shadow-md overflow-hidden flex flex-row">
          {/* Imagen del producto */}
          <div className="animate-pulse bg-gray-700 rounded-lg h-48 w-48"></div>
          
          {/* Contenido de la tarjeta */}
          <div className="p-2 flex flex-col justify-between flex-grow">
            {/* Nombre del producto */}
            <div className="animate-pulse bg-gray-700 h-4 w-32 rounded mb-2"></div>
            
            {/* Precio del producto */}
            <div className="flex items-center justify-center">
              <div className="animate-pulse bg-gray-700 h-8 w-16 rounded"></div>
            </div>
            
            {/* Botón de agregar al carrito (opcional) */}
            <button className="animate-pulse px-3 py-1 bg-gray-700 text-white font-bold rounded hover:bg-gray-300 focus:outline-none self-center">Loading</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonGridProductCol;
