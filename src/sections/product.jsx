'use client'
import { useEffect, useState } from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import ProductSkeleton from '@/components/skeletons/productSkeleton';

export default function Product({ id }) {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProductData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product data:', error);
        setLoading(false);
      }
    };

    fetchProductData();
  }, [id]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return <ProductSkeleton />;
  }

  return (
    <div className="max-w-6xl bg-black my-6 text-yellow-500">
      <div className="p-8 md:p-12 rounded-lg shadow-xl md:flex">
        {/* Contenedor de la imagen */}
        <div className="md:w-2/3 h-auto flex justify-center items-center">
          {productData && (
            <img
              src={productData.image}
              alt={productData.title}
              className="rounded-lg object-contain w-2/3 h-auto"
            />
          )}
        </div>

        {/* Contenedor de detalles del producto */}
        <div className="md:w-1/3 pl-6">
          <h2 className="text-2xl font-semibold my-4 w-full">
            {productData && productData.title}
          </h2>
          <p className="text-lg mb-4 text-pretty">{productData && productData.description}</p>

          {/* Contador de cantidad */}
          <div className="flex items-center mb-4">
            <span className="text-4xl font-semibold mr-4">
              ${productData && productData.price}
            </span>
            <div className="flex items-center">
              <button
                className="text-xl px-2 pb-1 rounded-lg bg-black hover:bg-yellow-500 hover:text-black"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="text-xl mx-2">{quantity}</span>
              <button
                className="text-xl px-2 pb-1 rounded-lg bg-black hover:bg-yellow-500 hover:text-black"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          </div>

          {/* Contenedor de opciones de compra */}
          <div className="flex items-center">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-black hover:text-yellow-400 transition duration-300 flex items-center justify-center gap-2 font-semibold">
              Agregar al carrito <FaCartShopping className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}