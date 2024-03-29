const ProductSkeleton = () => {
  return (
    <div className="bg-black my-6 text-gray-400 animate-pulse">
      <div className="max-w-6xl mx-auto p-4 md:p-8 rounded-lg shadow-xl flex flex-col md:flex-row">
        {/* Contenedor de la imagen */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <div className="bg-gray-700 rounded-lg h-64 md:h-96"></div>
        </div>
        {/* Contenedor de detalles del producto */}
        <div className="flex-auto px-0 md:px-6 md:ml-8">
          <div className="h-6 md:h-8 bg-gray-700 rounded-lg w-3/4 mb-2 md:mb-4"></div>
          <div className="h-4 bg-gray-700 rounded-lg w-5/6 mb-4 md:mb-8"></div>
          {/* Contador de cantidad */}
          <div className="flex items-center mb-4">
            <div className="h-10 md:h-12 bg-gray-700 rounded-lg w-28 md:w-32 mr-2 md:mr-4"></div>
            <div className="flex items-center">
              <div className="h-8 md:h-10 bg-gray-700 rounded-lg w-8 md:w-10 mr-2"></div>
              <div className="h-8 md:h-10 bg-gray-700 rounded-lg w-8 md:w-10 mx-2"></div>
              <div className="h-8 md:h-10 bg-gray-700 rounded-lg w-8 md:w-10 ml-2"></div>
            </div>
          </div>
          {/* Contenedor de opciones de compra */}
          <div className="flex items-center">
            <div className="h-10 md:h-12 bg-gray-700 rounded-lg w-40 md:w-48"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;