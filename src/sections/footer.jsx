import Image from "next/image";
export const Footer = () => {
    return (
        <footer className="bg-black text-yellow-400 py-6">
            <div className="">
                <div className="md:flex md:justify-between 2xl:px-64 py-4">
                    <div className="flex flex-col items-center text center">
                        <h1 className="font-bold text-lg mb-4">Contáctenos por nuestras redes sociales</h1>

                        <Image src="/img/BotiCharly-logotipos.svg"
                            width={128}
                            height={128}
                            alt="Logo de SuperCharly" />

                        <div className="flex items-center mb-4">
                            <a href="#" target="_blank" className="mr-2">

                            </a>
                            <a href="#" target="_blank" className="mr-2">

                            </a>
                            <a href="#" target="_blank">

                            </a>
                        </div>
                        <p>Teléfono (Sólo WhatsApp): +56 9 3769 7413</p>
                        <p>Correo: pedidos@boticharly.cl</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg mb-4">Botilleria Charly</h1>
                        <ul>
                            <li><a href="#" className="hover:text-white">Envío</a></li>
                            <li><a href="#" className="hover:text-white">Sobre nosotros</a></li>
                            <li><a href="#" className="hover:text-white">Contáctenos</a></li>
                            <li><a href="#" className="hover:text-white">Mapa del sitio</a></li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg mb-4">Súper Clientes</h1>
                        <ul>
                            <li><a href="#" className="hover:text-white">Iniciar sesión</a></li>
                            <li><a href="#" className="hover:text-white">Mi cuenta</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-black text-yellow-400 py-2">
                <div className="mx-auto text-center">Copyright © Boti Charly. Todos los derechos Reservados.</div>
            </div>
        </footer>

    );
};