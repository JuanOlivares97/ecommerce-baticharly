import React from 'react';
import Product from "@/sections/product";
import SlideProduct from "@/sections/slideProduct";

export default function ProductView() {
    return (
        <div>
            <div className="md:px-64">
                <Product />
            </div>
            <div>
                <SlideProduct />
            </div>
        </div>
    );
}
