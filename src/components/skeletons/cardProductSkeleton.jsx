const SkeletonGridProduct = ({ productsPerPage }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: productsPerPage }, (_, i) => (
        <div key={i} className="animate-pulse">
          <div className="rounded-lg bg-gray-200 h-48 sm:h-64 md:h-72 lg:h-80"></div>
          <div className="mt-4 h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="mt-2 h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonGridProduct;