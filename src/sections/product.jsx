import { CustomButton } from "@/components/button"
import Image from "next/image"

export default function Product({ titte, description, price, src, alt }) {
    return(
        <div className="bg-black my-6 text-yellow-500">
      <div className="max-w-6xl p-8 md:p-12 rounded-lg shadow-xl flex">
        {/* Contenedor de la imagen */}
        <div className="w-5/6 relative">
          <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
  
        {/* Contenedor de detalles del producto */}
        <div className="flex-auto">
          <h2 className="text-3xl font-semibold mb-4">{titte}</h2>
          <p className="text-lg mb-6">{description}</p>
  
          {/* Contenedor de opciones de compra */}
          <div className="flex items-center mb-6">
            <span className="text-2xl font-semibold mr-4">${price}</span>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg mx-4 hover:bg-black hover:text-yellow-400 transition duration-300 relative">
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}