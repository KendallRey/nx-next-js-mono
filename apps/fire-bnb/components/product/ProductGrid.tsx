import React from 'react';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

const ProductGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      <ProductCard />
      <ProductCard />
      <ProductCardSkeleton />
      <ProductCard />
      <ProductCardSkeleton />
      <ProductCard />
      <ProductCardSkeleton />
      <ProductCard />
      <ProductCard />
      <ProductCardSkeleton />
      <ProductCard />
      <ProductCardSkeleton />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductGrid;
