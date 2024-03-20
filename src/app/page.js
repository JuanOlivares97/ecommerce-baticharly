import CardProduct from "@/components/cardProduct";
import FullImage from "@/sections/carrusel";


export default function Home() {
  return (
    <div>
      <div>
        <FullImage src="/img/BannerBotilleria.jpg" alt="Banner" />
      </div>
      <div className="mx-64">
        <CardProduct /> 
      </div>
    </div>  
  );
};
