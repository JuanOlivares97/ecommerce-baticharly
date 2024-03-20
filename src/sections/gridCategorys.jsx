import CardCategory from "@/components/cardCategory";

const GridCategory = () => {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:px-64 my-4 gap-10">
        <CardCategory Imgsrc="/img/category-beer.webp" Imgalt="Beer" width={245} height={145} />
        <CardCategory Imgsrc="/img/category-wine.webp" Imgalt="Wine" width={245} height={145} />
        <CardCategory Imgsrc="/img/category-sales.webp" Imgalt="Sales" width={245} height={145} />
        <CardCategory Imgsrc="/img/category-delivery.webp" Imgalt="Delivery" width={245} height={145} />
      </div>
    );
};

export default GridCategory;