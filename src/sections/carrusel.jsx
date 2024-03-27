import Image from "next/image";

const FullImage = ({ src, alt }) => {
  return (
    <div className="max-w-full">
      <Image 
        src={src} 
        alt={alt} 
        layout="responsive" 
        width={1905} 
        height={435} 
        className="object-cover" 
      />
    </div>
  );
};

export default FullImage;
