import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Contáctenos</h2>
            <Image
              src="/img/BotiCharly-logotipos.svg"
              width={128}
              height={128}
              alt="Logo de SuperCharly"
              className="mx-auto md:mx-0"
            />
            <div className="flex justify-center md:justify-start mt-4">
              <Link href="#" target="_blank" aria-label="Facebook" className="text-yellow-500 hover:text-white mr-4">
                <FaFacebook size={24} />
              </Link>
              <Link href="#" target="_blank" aria-label="Instagram" className="text-yellow-500 hover:text-white mr-4">
                <FaInstagram size={24} />
              </Link>
            </div>
            <p className="mt-4">
              <FaWhatsapp className="inline-block mr-2" />
              +56 9 3769 7413
            </p>
            <p>
              <a href="mailto:pedidos@boticharly.cl" className="hover:text-white">
                pedidos@boticharly.cl
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Botilleria Charly</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Envío
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contáctenos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Mapa del sitio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Súper Clientes</h2>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Iniciar sesión
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Mi cuenta
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-black text-yellow-400 py-4 text-center">
          <p>Copyright © Boti Charly. Todos los derechos Reservados.</p>
        </div>
      </div>
    </footer>
  );
};