'use client'
import React, { useEffect, useState } from 'react';
import CardProduct from '@/components/cardProduct';

const GridProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:px-64 my-2 gap-6">
      {products.map(product => (
        <CardProduct
        key={product.id}
        NombreProducto={product.title}
        PrecioProducto={product.price}
        imgRef={product.image} />
      ))}
    </div>
  );
};

export default GridProduct;
