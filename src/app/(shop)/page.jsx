import GridProduct from "@/sections/gridProducts";
import FullImage from "@/sections/carrusel";
import GridCategory from "@/sections/gridCategorys";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <FullImage src="/img/BannerBotilleria.jpg" alt="Banner" />
      </div>
      <div className="flex justify-center">
        
        <GridCategory />

      </div>

      <div className="flex justify-center">
        <GridProduct />
      </div>
    </div>
  );
};
