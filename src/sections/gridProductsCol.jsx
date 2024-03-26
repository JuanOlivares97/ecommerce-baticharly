'use client'
import React, { useEffect, useState } from 'react';
import CardProductCol from '@/components/cardProductCol';

const GridProductCol = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8); // Define la cantidad de productos por página

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Calcula los índices del primer y último producto en la página actual
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Cambia de página
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-6">
      {loading ? (
        <div className="grid grid-cols-1 gap-6">
          {Array.from({ length: productsPerPage }, (_, i) => (
            <div key={i} className="bg-white text-white rounded-lg shadow-md overflow-hidden flex flex-row">
              {/* Imagen del producto */}
              <div className="animate-pulse bg-gray-200 rounded-lg h-48 w-48"></div>
              
              {/* Contenido de la tarjeta */}
              <div className="p-2 flex flex-col justify-between flex-grow">
                {/* Nombre del producto */}
                <div className="animate-pulse bg-gray-200 h-4 w-32 rounded mb-2"></div>
                
                {/* Precio del producto */}
                <div className="flex items-center justify-center">
                  <div className="animate-pulse bg-gray-200 h-8 w-16 rounded"></div>
                </div>
                
                {/* Botón de agregar al carrito (opcional) */}
                <button className="animate-pulse px-3 py-1 bg-gray-200 text-white font-bold rounded hover:bg-gray-300 focus:outline-none self-center">Loading</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            {currentProducts.map(product => (
              <CardProductCol
                key={product.id}
                NombreProducto={product.title}
                PrecioProducto={product.price}
                imgRef={product.image}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            {/* Botones de paginación */}
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`mx-1 px-3 py-1 rounded-full ${
                  currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default GridProductCol;
