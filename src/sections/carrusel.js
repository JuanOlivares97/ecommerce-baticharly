import Image from "next/image";
const FullImage = ({ src, alt }) => {
    return (
      <div>
        <Image src={src} alt={alt} 
        width={1905}
        height={435}
        className="object-cover" />
      </div>
    );
  };
  
  export default FullImage;