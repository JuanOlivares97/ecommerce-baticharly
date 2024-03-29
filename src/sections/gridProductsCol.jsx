'use client'
import React, { useEffect, useState } from 'react';
import CardProductCol from '@/components/cardProductCol';
import SkeletonGridProductCol from '@/components/skeletons/cardProductColSkeleton'

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
        <SkeletonGridProductCol productsPerPage={productsPerPage}/>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6">
            {currentProducts.map(product => (
              <CardProductCol
                key={product.id}
                id={product.id}
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
