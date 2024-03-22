import CardCategory from "@/components/cardCategory";
import Link from "next/link";<Link></Link>
const GridCategory = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:px-64 my-4 gap-10">
        <Link href="category/cervezas"><CardCategory Imgsrc="/img/category-beer.webp" Imgalt="Beer" width={500} height={210} /></Link>
        <Link href="category/vinos-y-espumantes"><CardCategory Imgsrc="/img/category-wine.webp" Imgalt="Wine" width={500} height={210} /></Link>
        <Link href="category/ofertas"><CardCategory Imgsrc="/img/category-sales.webp" Imgalt="Sales" width={500} height={210} /></Link>
        <Link href="#"><CardCategory Imgsrc="/img/category-delivery.webp" Imgalt="Delivery" width={500} height={210} /></Link>
      </div>
    );
};

export default GridCategory;