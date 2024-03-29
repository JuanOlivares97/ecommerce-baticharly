'use client'
import { useState } from 'react';
import GridProducts from '@/sections/gridProducts';
import GridProductsCol from '@/sections/gridProductsCol';
import { FaList, FaGrip } from "react-icons/fa6";
export default function CategoryView({ params }) {
    const [orderBy, setOrderBy] = useState('');
    const [gridView, setGridView] = useState(true);

    // Función para cambiar la opción de ordenado
    const handleOrderByChange = (e) => {
        setOrderBy(e.target.value);
    };

    // Función para alternar entre la vista de cuadrícula y lista
    const toggleGridView = () => {
        setGridView(!gridView);
    };

    return (
        <div className="flex text-white md:px-64 my-9">
            {/* Filtro */}
            <div className="hidden md:block w-1/4">
                {/* Aquí puedes colocar tu componente de filtro */}
                <h2>Filtro</h2>
            </div>

            {/* Grid */}
            <div className="md:w-3/4">
                {/* Selector de vista (Grid o Lista) y Ordenado */}
                <div className="flex justify-between mb-4">
                    {/* Selector de vista */}
                    <div>
                        <button onClick={toggleGridView} className="m-2">
                            {gridView ? <FaList className=' w-6 h-6' /> : <FaGrip className=' w-6 h-6' />}
                        </button>
                    </div>

                    {/* Selector de ordenado */}
                    <div>
                        <select className='bg-black' value={orderBy} onChange={handleOrderByChange}>
                            <option value="">Ordenar por</option>
                            <option value="name">Nombre</option>
                            <option value="price">Precio</option>
                            {/* Agrega más opciones de ordenado según tus necesidades */}
                        </select>
                    </div>
                </div>

                {/* Contenido principal (productos) */}
                <div>
                    <h2 className="text-3xl font-semibold text-center mb-10 text-white capitalize">{params.id.replace(/-/g, ' ')}</h2>

                    {gridView ? <GridProducts /> : <GridProductsCol />}
                </div>
            </div>
        </div>
    );
}