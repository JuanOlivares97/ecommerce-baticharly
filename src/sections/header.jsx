'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "@/components/menu";
import { FaCartShopping, FaInstagram, FaFacebookF } from "react-icons/fa6";
import { Cart } from "@/components/cart";

export const Header = () => {

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };


  return (
    <header>
      <div className="bg-black text-yellow-400 flex justify-between md:items-center py-2 px-4 md:px-8 2xl:px-64 border-b-2 border-yellow-600">
        <div id="socials" className="flex items-center">
          <a href="https://www.instagram.com/tunombre" className="mr-4"><FaInstagram /></a>
          <a href="https://www.facebook.com/tunombre"><FaFacebookF /></a>
        </div>
        <div id="info" className="text-xs md:text-base">
          Horario: Lunes a Sábado de 11:00 a 22:00 hrs.
        </div>
      </div>

      <div className="bg-black text-yellow-400 flex justify-between items-center md:py-4 px-4 md:px-8 2xl:px-64">
        <Link className="block md:inline-block" href="/">
          <Image
            className="hidden md:block"
            src='/img/BotiCharly-logotipos.svg'
            alt="Logo de SuperCharly"
            width={190}
            height={176}
            priority />
          <Image
            className="md:hidden"
            src='/img/BotiCharly-logotipos.svg'
            alt="Logo de SuperCharly"
            width={110}
            height={110}
            priority />
        </Link>
        <input type="text" placeholder="Buscar productos..." className="hidden md:block bg-transparent border-b border-yellow-400 text-yellow-400 placeholder-yellow-400 focus:outline-none focus:border-yellow-300 px-3 py-2 md:mx-4" />
        <button
          id="cart"
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg mx-4 md:mx-0 hover:bg-black hover:text-yellow-400 transition duration-300 relative"
          onClick={toggleCart}
        >
          <FaCartShopping className="w-7 h-7" />
          <span id="cant-articulos" className="bg-yellow-400 text-black rounded-full px-2 py-1 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            1
          </span>
        </button>
        <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
      </div>

      <nav className="bg-black 2xl:px-64 border-t-2 border-yellow-600">
        <Menu />
      </nav>

    </header>
  );
};