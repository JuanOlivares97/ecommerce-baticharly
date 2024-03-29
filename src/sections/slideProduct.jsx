'use client';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardProduct from '@/components/cardProduct';

export default function SlideProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true, // Centrar los productos en móviles
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // Centrar los productos en móviles
        },
      },
    ],
  };

  return (
    <div className="mx-8 py-8">
      <h2 className="text-3xl font-bold mb-6">Productos Destacados</h2>
      <Slider {...settings}>
        {loading ? (
          <div className="text-center">
            <div className="bg-gray-300 animate-pulse h-64 rounded-lg"></div>
          </div>
        ) : (
          products.map(product => (
            <div key={product.id} className="px-2">
              <CardProduct
                id={product.id}
                NombreProducto={product.title}
                PrecioProducto={product.price}
                imgRef={product.image}
              />
            </div>
          ))
        )}
      </Slider>
    </div>
  );
}