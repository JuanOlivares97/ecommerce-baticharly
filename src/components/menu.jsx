import Link from "next/link";
export const Menu = ({}) => {
    return (
        <ul className="grid grid-cols-3 md:flex md:justify-around text-center h-12">
            <li className={className}>
                <Link href="/category/ofertas" className={classNameLink}>Ofertas<i className='bx bx-user'></i></Link>
            </li>
            <li className={className}>
                <Link href="/category/cervezas" className={classNameLink}>Cervezas</Link>
            </li>
            <li className={className}>
                <Link href="/category/destilados" className={classNameLink}>Destilados</Link>
            </li>
            <li className={className}>
                <Link href="/category/vinos-y-espumantes" className={classNameLink}>Vino y Espumantes</Link>
            </li>
            <li className={className}>
                <Link href="/category/bebidas" className={classNameLink}>Bebidas</Link>
            </li>
            <li className={className}>
                <Link href="/category/licores" className={classNameLink}>Licores</Link>
            </li>
        </ul>
    );
};

const className = "hover:bg-yellow-600 flex items-center transition duration-300";
const classNameLink = "text-white font-semibold px-5 text-lg";