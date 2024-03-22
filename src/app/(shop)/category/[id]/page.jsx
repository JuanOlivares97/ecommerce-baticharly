export default function Page({params}) {

    return (
        <div className="text-white">
            <h1>Categoria: {params.id}</h1>
            {/* Resto del contenido de la página */}
        </div>
    );
}
