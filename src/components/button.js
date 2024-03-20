export const CustomButton = ({ text, href }) => {
  return (
    <a href={href} className="px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300">
      {text}
    </a>
  );
};