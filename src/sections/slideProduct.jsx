'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import CardProductCol from '@/components/cardProduct'; // Asumiendo que tienes un componente CardProductCol

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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <Slider {...settings}>
                    {products.map(product => (
                        <div key={product.id}>
                            <CardProductCol
                                NombreProducto={product.title}
                                PrecioProducto={product.price}
                                imgRef={product.image}
                            />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
}
