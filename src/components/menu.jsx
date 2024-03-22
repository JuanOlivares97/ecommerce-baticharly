import Link from "next/link";
export const Menu = ({}) => {
    return (
        <ul className="grid grid-cols-3 md:flex md:justify-around text-center h-12">
            <li className={className}>
                <Link href="#" className={classNameLink}>Ofertas<i className='bx bx-user'></i></Link>
            </li>
            <li className={className}>
                <Link href="#" className={classNameLink}>Mayorista</Link>
            </li>
            <li className={className}>
                <Link href="#" className={classNameLink}>Cervezas</Link>
            </li>
            <li className={className}>
                <Link href="#" className={classNameLink}>Destilados</Link>
            </li>
            <li className={className}>
                <Link href="#" className={classNameLink}>Vino y Espumantes</Link>
            </li>
            <li className={className}>
                <Link href="#" className={classNameLink}>Bebidas</Link>
            </li>
            <li className={className}>
                <Link href="#" className={classNameLink}>Licores</Link>
            </li>
        </ul>
    );
};

const className = "hover:bg-yellow-600 flex items-center transition duration-300";
const classNameLink = "text-white font-semibold px-5 text-lg";