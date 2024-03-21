import Image from "next/image";
import Link from "next/link";
import { CustomButton } from "@/components/button";

export const Header = () => {
    return (
        <header>
            <div id="up-bar" className="bg-black text-yellow-400 text-center md:flex md:justify-between 2xl:px-64 py-3">
                <div id="socials">
                    <Link href="https://www.instagram.com/tunombre" className="mr-4">Instagram</Link>
                    <Link href="https://www.facebook.com/tunombre">Facebook</Link>
                </div>
                <div id="info">
                    Horario: Lunes a Sábado de 11:00 a 22:00 hrs.
                </div>
                <div id="client">
                    <CustomButton text="Ingresa" href="#" />
                </div>
            </div>
            <div className="bg-black text-yellow-400 md:flex md:justify-between md:flex-row 2xl:px-64 flex-col items-center relative">
                <Image src="/img/BotiCharly-logotipos.svg" alt="Logo de SuperCharly" width={176} height={176}/>
                <input type="text" placeholder="Buscar productos..." className="bg-transparent border-b border-yellow-400 text-yellow-400 placeholder-yellow-400 focus:outline-none focus:border-yellow-300 px-3 py-2 mb-4" />
                <button id="cart" className="bg-yellow-400 text-black px-4 py-2 rounded-lg mx-4 hover:bg-black hover:text-yellow-400 transition duration-300 relative">
                    Carrito
                    <span id="cant-articulos" className="bg-yellow-400 text-black rounded-full px-2 py-1 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">1</span>
                </button>
            </div>
            <nav className="bg-black text-yellow-400 2xl:px-64 py-4">
                <ul className="md:flex md:justify-around text-center">
                    <li>
                        <Link href="#" className="hover:text-white">Ofertas</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white">Mayorista</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white">Cervezas</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white">Destilados</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white">Vino y Espumantes</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white">Bebidas</Link>
                    </li>
                    <li>
                        <Link href="#" className="hover:text-white">Licores</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};