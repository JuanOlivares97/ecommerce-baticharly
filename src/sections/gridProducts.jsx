'use client'
import React, { useEffect, useState } from 'react';
import CardProduct from '@/components/cardProduct';

const GridProduct = () => {
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
    <div className="container py-6">
      
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: productsPerPage }, (_, i) => (
            <div key={i} className="animate-pulse">
              <div className="rounded-lg bg-gray-200 h-64"></div>
              <div className="mt-4 h-4 bg-gray-200 rounded"></div>
              <div className="mt-2 h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4  gap-6 justify-items-center">
            {currentProducts.map(product => (
              <CardProduct
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

export default GridProduct;
