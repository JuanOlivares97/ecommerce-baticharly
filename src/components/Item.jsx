import Link from "next/link";
export const Item = ({ text, href }) => {
    return (
        <li className="relative px-6 py-3 hover:border-l-4 hover:border-purple-500">
             <Link href={href} className=" inline-flex items-center w-full text-sm font-semibold text-white transition-colors duration-150 hover:text-purple-800 " >
                <span className="m-auto">{text}</span>
            </Link>
        </li>
    );
};