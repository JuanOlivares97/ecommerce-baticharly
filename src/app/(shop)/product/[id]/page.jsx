import React from 'react';
import Product from "@/sections/product";
import SlideProduct from "@/sections/slideProduct";

export default function ProductView({params}) {
    return (
        <div>
            <div className="md:px-64">
                <Product id={params.id} />
            </div>
            <div>
                <SlideProduct />
            </div>
        </div>
    );
}
