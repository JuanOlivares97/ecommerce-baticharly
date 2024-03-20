import Image from "next/image";

const CardCategory = ({ Imgsrc, Imgalt, width, height }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <Image src={Imgsrc} alt={Imgalt} width={width} height={height} />
    </div>
  );
};

export default CardCategory;
