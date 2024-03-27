import Link from "next/link"; 
export const CustomButton = ({ text, href }) => {
  return (
    <Link href={href} className="px-4 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition duration-300">
      {text} 
    </Link>
  );
};