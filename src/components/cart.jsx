import React, { useRef, useEffect } from "react";
import { FaXmark, FaCartShopping } from "react-icons/fa6";

export const Cart = ({ isOpen, toggleCart }) => {
    const cartRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                toggleCart();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, toggleCart]);

    return isOpen ? (
        <>
            <div className="fixed top-0 right-0 w-full h-full bg-black opacity-80 z-30" />
            <div ref={cartRef} className="fixed top-0 right-0 w-80 h-full bg-zinc-950 p-4 z-40">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold flex items-center gap-3"><FaCartShopping />Carrito</h2>
                    <button onClick={toggleCart} className="text-yellow-500 hover:text-white flex items-center gap-1">
                        <FaXmark /> Cerrar
                    </button>
                </div>
                <div className="mb-2">Producto 1 - $10</div>
                <div className="mb-2">Producto 2 - $20</div>
                {/* Agrega más elementos de muestra aquí si lo deseas */}
                <div className="flex justify-between">
                    <span>Total:</span>
                    <span>$30</span>
                </div>
            </div>
        </>
    ) : null;
};
