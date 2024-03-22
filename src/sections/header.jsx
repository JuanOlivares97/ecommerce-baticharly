import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components/button";
import { Menu } from "@/components/menu";
import { FaCartShopping } from "react-icons/fa6";

export const Header = () => {
    return (
        <header>
            <div id="up-bar" className="bg-black text-yellow-400 text-center md:flex md:justify-between 2xl:px-64 py-3 border-b-2 border-yellow-600">
                <div id="socials">
                    <a href="https://www.instagram.com/tunombre" className="mr-4">Instagram</a>
                    <a href="https://www.facebook.com/tunombre">Facebook</a>
                </div>
                <div id="info">
                    Horario: Lunes a Sábado de 11:00 a 22:00 hrs.
                </div>
                <div id="client">
                    <CustomButton text="Ingresa" href="/auth/login" />
                </div>
            </div>

            <div className="bg-black text-yellow-400 flex md:justify-between md:flex-row 2xl:px-64 items-center flex-col my-4">
                <Link href="/"><Image src="/img/BotiCharly-logotipos.svg" alt="Logo de SuperCharly" width={176} height={176} /></Link>
                <input type="text" placeholder="Buscar productos..." className="hidden md:block  bg-transparent border-b border-yellow-400 text-yellow-400 placeholder-yellow-400 focus:outline-none focus:border-yellow-300 px-3 py-2 mb-4" />
                <button id="cart" className="bg-yellow-400 text-black px-4 py-2 rounded-lg mx-4 hover:bg-black hover:text-yellow-400 transition duration-300 relative">
                <FaCartShopping />
                    <span id="cant-articulos" className="bg-yellow-400 text-black rounded-full px-2 py-1 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">1</span>
                </button>
            </div>

            <nav className="bg-blac 2xl:px-64 border-t-2 border-yellow-600 ">
                <Menu />
            </nav>

        </header>
    );
};