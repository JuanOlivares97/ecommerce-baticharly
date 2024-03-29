'use client'
import React, { useState } from "react";
import Link from "next/link";

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:flex md:justify-around text-center">
      <div className="flex justify-center md:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 my-2 border rounded text-yellow-400 border-yellow-400 hover:text-white hover:border-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
          Categorias
        </button>
      </div>
      {isOpen ? (
        <ul className="fixed bottom-1 left-0 right-0 bg-black text-white z-10 md:static md:flex md:justify-around text-center gap-6 md:gap-0 animate-slide-in-bottom">
          <MenuItem href="/category/ofertas">Ofertas</MenuItem>
          <MenuItem href="/category/cervezas">Cervezas</MenuItem>
          <MenuItem href="/category/destilados">Destilados</MenuItem>
          <MenuItem href="/category/vinos-y-espumantes">Vino y Espumantes</MenuItem>
          <MenuItem href="/category/bebidas">Bebidas</MenuItem>
          <MenuItem href="/category/licores">Licores</MenuItem>
        </ul>
      ) : (
        <ul className="hidden md:flex md:justify-around text-center gap-6 md:gap-0">
          <MenuItem href="/category/ofertas">Ofertas</MenuItem>
          <MenuItem href="/category/cervezas">Cervezas</MenuItem>
          <MenuItem href="/category/destilados">Destilados</MenuItem>
          <MenuItem href="/category/vinos-y-espumantes">Vino y Espumantes</MenuItem>
          <MenuItem href="/category/bebidas">Bebidas</MenuItem>
          <MenuItem href="/category/licores">Licores</MenuItem>
        </ul>
      )}
    </nav>
  );
};

const MenuItem = ({ href, children }) => {
  return (
    <li className="hover:bg-yellow-600 transition duration-300 px-5 py-3">
      <Link className="text-white text-lg font-semibold px-5 py-3 md:py-0 md:flex md:items-center md:justify-center" href={href}>
        {children}
      </Link>
    </li>
  );
};
